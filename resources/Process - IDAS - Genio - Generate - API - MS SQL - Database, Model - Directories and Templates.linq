<Query Kind="Program">
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
	// -- Model Name(s) ---------------------------------------------------------------------------------------------------------------
	string[] modelNames = {
		"Employee",
		"Department",
		"Client",
		"ContactDetail",
		"EmployeeSalary",
		"Project",
		"ProjectAssignment",
		"ProjectComment",
		"ProjectWorkLog",
		"ProjectStatus",
		"Task",
		"TaskAssignment",
		"TaskComment",
		"TaskWorkLog",
		"TaskStatus",
		"LookupCategory",
		"LookupValue",
		"User",
		"UserGroup",
		"UserGroupCapacity",
		"UserLocks",
		"UserTransaction",
		"Entity",
		"EntityRelationship",
		"EntityUserGroupCapacity",
		"MenuItem",
		"MenuItemUser",
		"GroupMenuItem"};
		
	// -- root:/database ---------------------------------------------------------------------------------------------------------------		
	string rootDatabaseDirectory = @"C:\Users\A236978\Documents\Personal\Projects\Izingodla\idas-v.0.2\idas-api\database";
	
	createDirectoryIfNotExists(rootDatabaseDirectory);
	
	// -- root:/database/mssql ---------------------------------------------------------------------------------------------------------
	string rootDatabaseMsSqlDirectory = System.IO.Path.Combine(rootDatabaseDirectory, "mssql");
	
	createDirectoryIfNotExists(rootDatabaseMsSqlDirectory);
	
	// -- root:/database/mssql/models -------------------------------------------------------------------------------------------------
	string rootDatabaseMsSqlModelsDirectory = System.IO.Path.Combine(rootDatabaseMsSqlDirectory, "models");
	
	createDirectoryIfNotExists(rootDatabaseMsSqlModelsDirectory);
	
	// Create a model template file for each modelName in modelNames
	foreach(var modelName in modelNames){
		string formattedModelName = String.Join("-", SplitCamelCase(modelName).ToLower().Split(' '));
		string rootDatabaseMsSqlModelsModelNameFilePath = System.IO.Path.Combine(rootDatabaseMsSqlModelsDirectory, string.Format("{0}.js", formattedModelName));
		string content = templateApiJsModelTable(modelName);
		replaceFile(rootDatabaseMsSqlModelsModelNameFilePath, content);
	}
	
	// -- root:/database/mssql/repository ----------------------------------------------------------------------------------------------
	string rootDatabaseMsSqlRepositoryDirectory = System.IO.Path.Combine(rootDatabaseMsSqlDirectory, "repository");
	
	createDirectoryIfNotExists(rootDatabaseMsSqlRepositoryDirectory);
	
	// Create a directory and template file for each modelName in modelNames into /database/mssql/repository
	foreach(var modelName in modelNames){
		string formattedModelName = String.Join("-", SplitCamelCase(modelName).ToLower().Split(' '));
		string rootDatabaseMsSqlRepositoryModelNameDirectory = System.IO.Path.Combine(rootDatabaseMsSqlRepositoryDirectory, formattedModelName);
		string rootDatabaseMsSqlRepositoryModelNameFilePath = System.IO.Path.Combine(rootDatabaseMsSqlRepositoryModelNameDirectory, string.Format("repository-{0}.js", formattedModelName));
		createDirectoryIfNotExists(rootDatabaseMsSqlRepositoryModelNameDirectory);
		string content = templateApiJsModelRepository(string.Format("MS SQL [dbo].[{0}] database repository model", modelName));
		replaceFile(rootDatabaseMsSqlRepositoryModelNameFilePath, content);
	}
}

// Define other methods and classes here
public string SplitCamelCase(string str)
{
	return Regex.Replace( Regex.Replace( str, @"(\P{Ll})(\P{Ll}\p{Ll})", "$1 $2" ), @"(\p{Ll})(\P{Ll})", "$1 $2" );
}
private void createDirectoryIfNotExists(string path){
	if(!System.IO.Directory.Exists(path)){
		System.IO.Directory.CreateDirectory(path);
	}
}
private void deleteFileIfExists(string path){
	if(System.IO.File.Exists(path)){
		System.IO.File.Delete(path);
	}
}
private void createFileIfNotExists(string path, string content){
	if(!System.IO.File.Exists(path)){
		System.IO.File.WriteAllText(path, content);
	}
}
private void replaceFile(string path, string content){
	deleteFileIfExists(path);
	System.IO.File.WriteAllText(path, content);
}
private String templateApiJsModelTable(String name) {
	System.Text.StringBuilder sb = new StringBuilder();
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Author:	    TS MOGANO");
	sb.AppendLine("| Create date:  02/03/2021");
	sb.AppendLine("| Description:  IDAS - Genio API - [dbo].[" + name + "] database table model class");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("const " + name + "Schema = {");
	sb.AppendLine("    _id: Number");
	sb.AppendLine("}");
	sb.AppendLine("");
	sb.AppendLine("module.exports = " + name + "Schema;");
	return sb.ToString();
}
private String templateApiJsModelRepository(String description){
	System.Text.StringBuilder sb = new StringBuilder();
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Author:		TS MOGANO");
	sb.AppendLine("| Create date:	02/03/2021");
	sb.AppendLine("| Description:	IDAS - Genio API - " + description + " class");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Dependencies");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Functions");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("const Repository = (config = getDefaultConfig()) => {");
	sb.AppendLine("    const getAll = (request, response, next) => {");
	sb.AppendLine("");
	sb.AppendLine("    }");
	sb.AppendLine("    const getBy = (request, response, next) => {");
	sb.AppendLine("");
	sb.AppendLine("    }");
	sb.AppendLine("");
	sb.AppendLine("    /*");
	sb.AppendLine("    |------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("    | Function Return(s)");
	sb.AppendLine("    |------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("     */");
	sb.AppendLine("    return {");
	sb.AppendLine("        getAll: getAll,");
	sb.AppendLine("        getBy: getBy");
	sb.AppendLine("    };");
	sb.AppendLine("");
	sb.AppendLine("}");
	sb.AppendLine("const getDefaultConfig = () => { return require(`./../../../../config/config`); }");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| module exports");
	sb.AppendLine("|------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("module.exports = Repository;");
	return sb.ToString();
}