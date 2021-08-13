<Query Kind="Program">
  <Reference>&lt;RuntimeDirectory&gt;\System.Collections.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Data.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.DirectoryServices.AccountManagement.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.DirectoryServices.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.IO.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.IO.FileSystem.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Linq.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Linq.Expressions.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Linq.Queryable.dll</Reference>
  <Namespace>System.DirectoryServices.AccountManagement</Namespace>
  <Namespace>System.IO</Namespace>
</Query>

void Main()
{
	string createdBy = "TS MOGANO";
	string dateCreated = DateTime.Now.ToString("yyyy-MM-dd");
	// ===================== Directory(ies) : ROOT =============================================================================================
	string directoryIdasGenioRoot = System.IO.Directory.GetParent(System.IO.Directory.GetCurrentDirectory()).ToString();
	// ===================== Directory(ies) : IDAS API - Database, Models (MsSql, MongoDB, etc.) ===============================================
	string directoryIdasGenioDbApi = System.IO.Path.Combine(directoryIdasGenioRoot, "idas-api");
	string directoryRoutesIdasGenioDbApiRoutes = System.IO.Path.Combine(directoryIdasGenioDbApi, "routes");
	
	// Create directory(ies), if it does not exist
	createDirectoryIfNotExists(directoryIdasGenioDbApi);
	createDirectoryIfNotExists(directoryRoutesIdasGenioDbApiRoutes);
	
	// ===================== Database : Model(s), Table(s) ===================================================================================
	string connectionString = "server=.; database=IdasGeniodB; integrated security = true";
	try{
		string fileContent;
		// Connect to the database
		using (SqlConnection connection = new SqlConnection(connectionString))  
		{
			// Instantiate routes IDictionary
			IDictionary<string, string> routes = new Dictionary<string, string>();
			// Open the connection to the database
		    connection.Open();
			// Get a collection of all tables from the database schema
			DataTable tables = connection.GetSchema("Tables");
			// Iterate through all the tables
			foreach(DataRow row in tables.Rows) {
				// Get the SchemaName
				string schemaName = row[1].ToString();
				// Get the TableName
				string tableName = row[2].ToString();
				// Js Repository name
				string jsRepositoryName = String.Format("{0}Repository", tableName);
				// Js Repository Route directory
				string directoryRoutesIdasGenioDbApiRepositoryName = SplitCamelCase(tableName).Replace(" ", "-").Trim().ToLower();
				string directoryRoutesIdasGenioDbApiRepository = System.IO.Path.Combine(directoryRoutesIdasGenioDbApiRoutes, directoryRoutesIdasGenioDbApiRepositoryName);
				// Clean and Delete directory, if exists
				cleanAndDeleteDirectory(directoryRoutesIdasGenioDbApiRepository);
				// Create directory
				createDirectoryIfNotExists(directoryRoutesIdasGenioDbApiRepository);
				// Js Repository Routes API file
				string pathRoutesIdasGenioDbApiRepository = System.IO.Path.Combine(directoryRoutesIdasGenioDbApiRepository, "api.js");
				// Get Routes API file content
				fileContent = templateRoutesIdasGenioDbApi(createdBy, dateCreated, schemaName, tableName, jsRepositoryName, directoryRoutesIdasGenioDbApiRepositoryName);
				// Write Js Repository Routes API file content
				createFileIfNotExists(pathRoutesIdasGenioDbApiRepository, fileContent);
				// Js Repository Route name
				string jsRepositoryRouteName = String.Format("route{0}", tableName);
				// Format and Add Js Repository Route name and path 
				routes.Add(jsRepositoryRouteName, pathRoutesIdasGenioDbApiRepository.Replace(directoryRoutesIdasGenioDbApiRoutes, ".").Replace("\\", "/").Replace(".js", "").Trim());
			}
			// js Routes file
			string pathRoutesIdasGenioDbApiRoutes = System.IO.Path.Combine(directoryRoutesIdasGenioDbApiRoutes, "routes.js");
			// js Routes content
			fileContent = templateRoutesIdasGenioApi(createdBy, dateCreated, routes);
			// Write Js Routes API file content
			replaceFile(pathRoutesIdasGenioDbApiRoutes, fileContent);
		}
	}catch(Exception exception){
		exception.Dump();
	}
}

// Define other methods and classes here
public string SplitCamelCase(string str)
{
	return Regex.Replace( Regex.Replace( str, @"(\P{Ll})(\P{Ll}\p{Ll})", "$1 $2" ), @"(\p{Ll})(\P{Ll})", "$1 $2" );
}
private void cleanAndDeleteDirectory(string path){
	if(System.IO.Directory.Exists(path)){
		Console.WriteLine("Clean and Delete Directory : {0}", path);
		System.IO.DirectoryInfo rootDir = new DirectoryInfo(path);
		foreach (FileInfo file in rootDir.EnumerateFiles())
		{
		    file.Delete(); 
		}
		foreach (DirectoryInfo dir in rootDir.EnumerateDirectories())
		{
		    cleanAndDeleteDirectory(dir.ToString());
		}
		rootDir.Delete(true);
	}
}
private void createDirectoryIfNotExists(string path){
	if(!System.IO.Directory.Exists(path)){
		Console.WriteLine("Create Directory : {0}", path);
		System.IO.Directory.CreateDirectory(path);
	}
}
private void deleteFileIfExists(string path){
	if(System.IO.File.Exists(path)){
		Console.WriteLine("Delete File : {0}", path);
		System.IO.File.Delete(path);
	}
}
private void createFileIfNotExists(string path, string content){
	if(!System.IO.File.Exists(path)){
		Console.WriteLine("Create File : {0}", path);
		System.IO.File.WriteAllText(path, content);
	}
}
private void replaceFile(string path, string content){
	deleteFileIfExists(path);
	Console.WriteLine("Create File : {0}", path);
	System.IO.File.WriteAllText(path, content);
}
private String templateRoutesIdasGenioDbApi(string createdBy, string dateCreated, string schemaName, string tableName, string repositoryName, string repositoryRouteName) {
	System.Text.StringBuilder sb = new StringBuilder();
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Author:	   " + createdBy);
	sb.AppendLine("| Create date:  " + dateCreated);
	sb.AppendLine("| Description:  IDAS - Genio - API - Routes utility class for the [" + schemaName + "].[" + tableName + "] table");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Dependency(ies)");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("const _hearbeat = require(`./../heartbeat`);");
	sb.AppendLine("const _repository = require(`./../../database/repository/mssql/" + repositoryName + "`);");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| module.exports");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("module.exports = function(router, config) {");
	sb.AppendLine("  const apiAnchorName = `" + repositoryRouteName + "`;");
	sb.AppendLine("  const heartbeat = _hearbeat(config);");
	sb.AppendLine("  const repository = _repository();");
	sb.AppendLine("");
	sb.AppendLine("    // ping");
	sb.AppendLine("    router.route(`/${apiAnchorName}/ping`)");
	sb.AppendLine("      .get(heartbeat.ping);");
	sb.AppendLine("");
	sb.AppendLine("    // create");
	sb.AppendLine("    router.route(`/${apiAnchorName}/create`)");
	sb.AppendLine("      .put(repository.create);");
	sb.AppendLine("");
	sb.AppendLine("    // getAll");
	sb.AppendLine("    router.route(`/${apiAnchorName}/getAll`)");
	sb.AppendLine("      .get(repository.getAll);");
	sb.AppendLine("");
	sb.AppendLine("    // getById");
	sb.AppendLine("    router.route(`/${apiAnchorName}/getById`)");
	sb.AppendLine("      .get(repository.getById);");
	sb.AppendLine("");
	sb.AppendLine("    // getBy");
	sb.AppendLine("    router.route(`/${apiAnchorName}/getBy`)");
	sb.AppendLine("      .get(repository.getBy);");
	sb.AppendLine("");
	sb.AppendLine("    // update");
	sb.AppendLine("    router.route(`/${apiAnchorName}/update`)");
	sb.AppendLine("      .put(repository.update);");
	sb.AppendLine("");
	sb.AppendLine("    // delete");
	sb.AppendLine("    router.route(`/${apiAnchorName}/delete`)");
	sb.AppendLine("      .put(repository.delete);");
	sb.AppendLine("");
	sb.AppendLine("}");
	return sb.ToString();
}
private String templateRoutesIdasGenioApi(string createdBy, string dateCreated, IDictionary<string, string> routes){
	StringBuilder sb = new StringBuilder();
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Author:	   " + createdBy);
	sb.AppendLine("| Create date:  " + dateCreated);
	sb.AppendLine("| Description:  IDAS - Genio - API - routes utilities class");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Dependency(ies)");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("const express = require(`express`);");
	sb.AppendLine("const config = require(`../config/config`);");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Function(s)");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("function eRoutes() {");
	sb.AppendLine("    const router = express.Router();");
	sb.AppendLine("    var root = require(`./root`)(router, config);");
	sb.AppendLine("    var authentication = require(`./authentication/api`)(router, config);");
	
	foreach(var route in routes){
		sb.AppendLine("    var " + route.Key + " = require(`" + route.Value + "`)(router, config);");
	}
	
	sb.AppendLine("    return router;");
	sb.AppendLine("}");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| module.exports");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("module.exports = eRoutes;");
	return sb.ToString();
}