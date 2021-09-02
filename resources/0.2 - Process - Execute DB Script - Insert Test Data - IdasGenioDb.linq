<Query Kind="Program">
  <Reference>C:\Windows\Microsoft.NET\assembly\GAC_MSIL\Microsoft.SqlServer.ConnectionInfo\v4.0_15.0.0.0__89845dcd8080cc91\Microsoft.SqlServer.ConnectionInfo.dll</Reference>
  <Reference>C:\Windows\Microsoft.NET\assembly\GAC_MSIL\Microsoft.SqlServer.Smo\v4.0_15.0.0.0__89845dcd8080cc91\Microsoft.SqlServer.Smo.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Data.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.DirectoryServices.AccountManagement.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.DirectoryServices.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.IO.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.IO.FileSystem.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Linq.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Linq.Expressions.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Linq.Queryable.dll</Reference>
  <Namespace>Microsoft.SqlServer.Management.Common</Namespace>
  <Namespace>Microsoft.SqlServer.Management.Smo</Namespace>
  <Namespace>System.DirectoryServices.AccountManagement</Namespace>
  <Namespace>System.IO</Namespace>
</Query>

void Main()
{
	// ===================== Configuration =====================================================================================================
	string companyName = "IDAS";
	string applicationName = "Genio";
	string attachmentsDirectoryFormat = @"c:\data\{0}\{1}\secure\attachments";
	string attachmentsDirectory = string.Format(attachmentsDirectoryFormat, companyName, applicationName).ToLower();
	// ===================== CreatedBy, DateCreated ============================================================================================
	string createdBy = "TS MOGANO";
	string dateCreated = DateTime.Now.ToString("yyyy-MM-dd");
	// ===================== Directory(ies) ====================================================================================================
	// parent / root directory
	string directoryIdasGenioRoot = System.IO.Directory.GetParent(System.IO.Directory.GetCurrentDirectory()).ToString();
	// resources directory
	string directoryResources = System.IO.Path.Combine(directoryIdasGenioRoot, "resources");
	// resources/database directory
	string directoryResourcesDatabase = System.IO.Path.Combine(directoryResources, "database");
	// resources/templates directory
	string directoryResourcesTemplates = System.IO.Path.Combine(directoryResources, "templates");
	// resources/test-data directory
	string directoryResourcesTestData = System.IO.Path.Combine(directoryResources, "test-data");
	// resources/test-data/documents directory
	string directoryResourcesTestDataDocuments = System.IO.Path.Combine(directoryResourcesTestData, "documents");
	// resources/test-data/documents/invoicing directory
	string directoryResourcesTestDataDocumentsInvoicing = System.IO.Path.Combine(directoryResources, "invoicing");
	// resources/test-data/documents/project submissions directory
	string directoryResourcesTestDataDocumentsProjectSubmissions = System.IO.Path.Combine(directoryResources, "project submissions");
	// idas-api directory
	string directoryIdasGenioApi = System.IO.Path.Combine(directoryIdasGenioRoot, "idas-api");
	// idas-api/database directory
	string directoryIdasGenioApiDatabase = System.IO.Path.Combine(directoryIdasGenioApi, "database");
	// idas-api/database/db-context directory
	string directoryIdasGenioApiDatabaseDbContext = System.IO.Path.Combine(directoryIdasGenioApiDatabase, "db-context");
	// idas-api/database/db-context/mssql directory
	string directoryIdasGenioApiDatabaseDbContextMsSql = System.IO.Path.Combine(directoryIdasGenioApiDatabaseDbContext, "mssql");
	// idas-api/database/db-context/mongodb directory
	string directoryIdasGenioApiDatabaseDbContextMongoDb = System.IO.Path.Combine(directoryIdasGenioApiDatabaseDbContext, "mongodb");
	// idas-api/database/models directory
	string directoryIdasGenioApiDatabaseModels = System.IO.Path.Combine(directoryIdasGenioApiDatabase, "models");
	// idas-api/database/models/mssql directory
	string directoryIdasGenioApiDatabaseModelsMsSql = System.IO.Path.Combine(directoryIdasGenioApiDatabaseModels, "mssql");
	// idas-api/database/models/mongodb directory
	string directoryIdasGenioApiDatabaseModelsMongoDb = System.IO.Path.Combine(directoryIdasGenioApiDatabaseModels, "mongodb");
	// idas-api/database/repository directory
	string directoryIdasGenioApiDatabaseRepository = System.IO.Path.Combine(directoryIdasGenioApiDatabase, "repository");
	// idas-api/database/repository/mssql directory
	string directoryIdasGenioApiDatabaseRepositoryMsSql = System.IO.Path.Combine(directoryIdasGenioApiDatabaseRepository, "mssql");
	// idas-api/database/repository/mongodb directory
	string directoryIdasGenioApiDatabaseRepositoryMongoDb = System.IO.Path.Combine(directoryIdasGenioApiDatabaseRepository, "mongodb");
	// ===================== File(s) ==========================================================================================================
	// Create database
	string file01CreateDatabase = System.IO.Path.Combine(directoryResourcesDatabase, "0.1. Create Database - IdasGenioDb.sql");
	// Insert test data
	string file02CreateDatabase = System.IO.Path.Combine(directoryResourcesDatabase, "0.2. Insert Test Data - IdasGenioDb.sql");
	// ===================== Database ConnectionString(s) ======================================================================================
	string connectionStringMaster = "server=.; database=master; integrated security = true";
	string connectionStringIdasGenioDb = "server=.; database=IdasGenioDb; integrated security = true";
	
	// =========================================================================================================================================
	// == Start Execution
	// =========================================================================================================================================
	string execQueryScript = string.Empty;
	string jsContent = string.Empty;
	bool hasError = false;
	string message = string.Empty;
	try{	
		// =====================================================================================================================================
		// == Run script: Insert Test Data
		// =====================================================================================================================================
		if(checkIfFileExists(file02CreateDatabase)){
			Console.WriteLine("Preparing to execute: {0}", file02CreateDatabase);
			// Connect to database
			// Execute script
			using (SqlConnection connectionIdasGenioDb = new SqlConnection(connectionStringIdasGenioDb)) {
				execQueryScript = System.IO.File.ReadAllText(file02CreateDatabase);
				if(execQueryScript != null && execQueryScript.Length != 0){
					// ==========================================================================================================================
					// == Connect to database
					// ==========================================================================================================================
					connectionIdasGenioDb.Open();
					Server server = new Server(new ServerConnection(connectionIdasGenioDb));
					// ==========================================================================================================================
					// == Execute script
					// ==========================================================================================================================
        			//server.ConnectionContext.ExecuteNonQuery(execQueryScript);
					Console.WriteLine("{0}, executed successfully", file02CreateDatabase);
					// ==========================================================================================================================
					// == Execute: Get all test-data/* files
					// ==========================================================================================================================
					string[] fileExtensions = new string[]{".pdf", ".xls", ".xlsx", ".doc", ".docx", ".txt"};
					IEnumerable<FileInfo> files = getDirectoryFiles(directoryResourcesTestData, fileExtensions);
					List<FileAttachment> fileAttachments = new List<FileAttachment>();
					// ==========================================================================================================================
					// == Execute: Get all data from database table(s) - Project, Task, CalendarEvent, etc... that use FileAttachment
					// ==========================================================================================================================
					DataRow drFileAttachment = connectionIdasGenioDb.GetSchema("Tables", new string[]{null, null, "FileAttachment", "BASE TABLE"}).Rows.Cast<DataRow>().ToList()[0];
					string[] tableNames = new string[]{"Project", "Task", "CalendarEvent"};
					StringBuilder sbExecQuery = new StringBuilder();
					tableNames.ToList().ForEach(tableName => {
						connectionIdasGenioDb.GetSchema("Tables", new string[]{null, null, tableName, "BASE TABLE"})
							.Rows.Cast<DataRow>()
							.ToList()
							.ForEach(row => {
								using(SqlCommand command = new SqlCommand(string.Format("SELECT [_id], [CreatedBy] FROM [{0}].[{1}]", row["TABLE_SCHEMA"], row["TABLE_NAME"]), connectionIdasGenioDb)){
									// Execute the command
									using(var reader = command.ExecuteReader())
									{
										// Iterate through each test file, generate insert items
										while(reader.Read()){
											files
											.ToList()
											.ForEach(file => {
												fileAttachments.Add(new FileAttachment(drFileAttachment["TABLE_SCHEMA"].ToString(), drFileAttachment["TABLE_NAME"].ToString(), row["TABLE_SCHEMA"].ToString(), row["TABLE_NAME"].ToString(), reader["_id"], reader["CreatedBy"], file));
											});
										}
									}
								}
							});
					});
					fileAttachments.Dump();
					cleanAndDeleteDirectory(attachmentsDirectory);
					string attachmentFileDirectory = string.Empty;
					fileAttachments.ForEach(fileAttachment => {
						fileAttachment.Dump();
						using(SqlCommand insertFileAttachment = new SqlCommand(fileAttachment.InsertQuery, connectionIdasGenioDb)) {
							fileAttachment.FileAttachmentId = Convert.ToInt32(insertFileAttachment.ExecuteScalar());
							attachmentFileDirectory = System.IO.Path.Combine(attachmentsDirectory, SplitCamelCase(fileAttachment.ObjectTableName).Replace(" ", "-").ToLower(), fileAttachment.ObjectId.ToString(), fileAttachment.FileAttachmentId.ToString());
							fileAttachment.AttachmentFile = System.IO.Path.Combine(attachmentFileDirectory, fileAttachment.FileName);
							createDirectoryIfNotExists(attachmentFileDirectory);
							fileAttachment.File.CopyTo(fileAttachment.AttachmentFile);
						}
					});
				}else{
					Console.WriteLine("Unable to execute: {0}, file is empty", file02CreateDatabase);
				}
				//if (connectionIdasGenioDb.State == System.Data.ConnectionState.Open){
				//	connectionIdasGenioDb.Close();
				//}
				connectionIdasGenioDb.Close();
			}
		}else{
			hasError = true;
			message = string.Format("{0}, does not exist on this machine", file02CreateDatabase);
		}
	}catch(Exception exception){
		hasError = true;
		message = string.Format(">> ERROR:{0}\r\n{1}", exception.Message, exception.StackTrace);
	}finally{
		Console.WriteLine(string.Format("Completed, {0}.\r\n{1}", (hasError) ? "with error(s)" : "successfully", message));
	}
}

// Define other methods and classes here
public static string SplitCamelCase(string str)
{
	return Regex.Replace( Regex.Replace( str, @"(\P{Ll})(\P{Ll}\p{Ll})", "$1 $2" ), @"(\p{Ll})(\P{Ll})", "$1 $2" );
}
private bool checkIfDirectoryExists(string path) {
	return System.IO.Directory.Exists(path);
}
private bool checkIfFileExists(string path) {
	return System.IO.File.Exists(path);
}
private void cleanAndDeleteDirectory(string path){
	if(checkIfDirectoryExists(path)){
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
	if(!checkIfDirectoryExists(path)){
		Console.WriteLine("Create Directory : {0}", path);
		System.IO.Directory.CreateDirectory(path);
	}
}
private IEnumerable<FileInfo> getDirectoryFiles(string path, string[] fileExtensions) {
	if(fileExtensions == null || fileExtensions.Length <= 0){
		return null;
	}
    IEnumerable<FileInfo> files = new System.IO.DirectoryInfo(path).EnumerateFiles("*.*", SearchOption.AllDirectories);
    return files.Where(file => fileExtensions.Contains(file.Extension));
}
private void deleteFileIfExists(string path){
	if(checkIfFileExists(path)){
		Console.WriteLine("Delete File : {0}", path);
		System.IO.File.Delete(path);
	}
}
private void createFileIfNotExists(string path, string content){
	if(!checkIfFileExists(path)){
		Console.WriteLine("Create File : {0}", path);
		System.IO.File.WriteAllText(path, content);
	}
}
private void replaceFile(string path, string content){
	deleteFileIfExists(path);
	System.IO.File.WriteAllText(path, content);
}
private String templateMsSqlModelIdasGenioDbApi(string createdBy, string dateCreated, string schemaName, string tableName, string entityParameters, string componentParameters, string componentReturnParameters) {
	System.Text.StringBuilder sb = new StringBuilder();
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Author:		" + createdBy);
	sb.AppendLine("| Create date:	" + dateCreated);
	sb.AppendLine("| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [" + schemaName + "].[" + tableName + "] Table");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Function(s)");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("const " + tableName + " = () => {");
	sb.AppendLine("	const fromEntity = (entity = {}) => {");
	sb.AppendLine("		return fromComponents(" + entityParameters + ");");
	sb.AppendLine("	}");
	sb.AppendLine("	const fromComponents = (" + componentParameters + ") => {");
	sb.AppendLine("		return {");
	sb.AppendLine(String.Format("\t\t\t{0}", componentReturnParameters));
	sb.AppendLine("		}");
	sb.AppendLine("	}");
	sb.AppendLine("	return {");
	sb.AppendLine("		fromEntity: fromEntity,");
	sb.AppendLine("		fromComponents: fromComponents");
	sb.AppendLine("	}");
	sb.AppendLine("}");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| module.exports");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("module.exports = " + tableName + ";");
	return sb.ToString();
}
private String templateMsSqlRepositoryIdasGenioDbApi(string createdBy, string dateCreated, string schemaName, string tableName){
	System.Text.StringBuilder sb = new StringBuilder();
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Author:		" + createdBy);
	sb.AppendLine("| Create date:	" + dateCreated);
	sb.AppendLine("| Description:	IDAS - Genio - API - MS SQL Entity (Model) Repository utility class for the [" + schemaName + "].[" + tableName + "] Table");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Dependency(ies)");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("const entityName = `" + tableName + "`;");
	sb.AppendLine("const _" + tableName + " = require(`./../../models/mssql/" + tableName + "`);");
	sb.AppendLine("const _dbContext = require(`./../../db-context/mssql/mssql-idas-genio-db-context`);");
	sb.AppendLine("const { onHttpRequestCompleted } = require(`../../../common/logging/logger`);");
	sb.AppendLine("const { getRequestQueryParametersWithoutUid } = require(`../../../common/http-helper`);");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Function(s)");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("const Repository = () => {");
	sb.AppendLine("    const " + tableName + " = _" + tableName + "();");
	sb.AppendLine("    const dbContext = _dbContext();");
	sb.AppendLine("    const create = (request, response, next) => {");
	sb.AppendLine("        try{");
	sb.AppendLine("            const uid = request.query.uid;");
	sb.AppendLine("            const entity = " + tableName + ".fromEntity(request.body);");
	sb.AppendLine("            dbContext.create(uid, entityName, entity, (error, data, message) => {");
	sb.AppendLine("                return onHttpRequestCompleted(__filename, request, response, error, data, message);");
	sb.AppendLine("            });");
	sb.AppendLine("        }catch(error){");
	sb.AppendLine("            return onHttpRequestCompleted(__filename, request, response, error);");
	sb.AppendLine("        }");
	sb.AppendLine("    }");
	sb.AppendLine("    const getAll = (request, response, next) => {");
	sb.AppendLine("        try{");
	sb.AppendLine("            const uid = request.query.uid;");
	sb.AppendLine("            dbContext.getAll(uid, entityName, (error, data, message) => {");
	sb.AppendLine("                return onHttpRequestCompleted(__filename, request, response, error, data, message);");
	sb.AppendLine("            });");
	sb.AppendLine("        }catch(error){");
	sb.AppendLine("            return onHttpRequestCompleted(__filename, request, response, error);");
	sb.AppendLine("        }");
	sb.AppendLine("    }");
	sb.AppendLine("    const getById = (request, response, next) => {");
	sb.AppendLine("        try{");
	sb.AppendLine("            const uid = request.query.uid;");
	sb.AppendLine("            const entityId = request.query.id;");
	sb.AppendLine("            dbContext.getById(uid, entityName, entityId, (error, data, message) => {");
	sb.AppendLine("                return onHttpRequestCompleted(__filename, request, response, error, data, message);");
	sb.AppendLine("            });");
	sb.AppendLine("        }catch(error){");
	sb.AppendLine("            return onHttpRequestCompleted(__filename, request, response, error);");
	sb.AppendLine("        }");
	sb.AppendLine("    }");
	sb.AppendLine("    const getBy = (request, response, next) => {");
	sb.AppendLine("        try{");
	sb.AppendLine("            const uid = request.query.uid;");
	sb.AppendLine("            dbContext.getBy(uid, entityName, getRequestQueryParametersWithoutUid(request), (error, data, message) => {");
	sb.AppendLine("                return onHttpRequestCompleted(__filename, request, response, error, data, message);");
	sb.AppendLine("            });");
	sb.AppendLine("        }catch(error){");
	sb.AppendLine("            return onHttpRequestCompleted(__filename, request, response, error);");
	sb.AppendLine("        }");
	sb.AppendLine("    }");
	sb.AppendLine("    const update = (request, response, next) => {");
	sb.AppendLine("        try{");
	sb.AppendLine("            const uid = request.query.uid;");
	sb.AppendLine("            const entity = " + tableName + ".fromEntity(request.body);");
	sb.AppendLine("            dbContext.update(uid, entityName, entity, (error, data, message) => {");
	sb.AppendLine("                return onHttpRequestCompleted(__filename, request, response, error, data, message);");
	sb.AppendLine("            });");
	sb.AppendLine("        }catch(error){");
	sb.AppendLine("            return onHttpRequestCompleted(__filename, request, response, error);");
	sb.AppendLine("        }");
	sb.AppendLine("    }");
	sb.AppendLine("    const _delete = (request, response, next) => {");
	sb.AppendLine("        try{");
	sb.AppendLine("            const uid = request.query.uid;");
	sb.AppendLine("            const entity = " + tableName + ".fromEntity(request.body);");
	sb.AppendLine("            dbContext.delete(uid, entityName, entity._id, (error, data, message) => {");
	sb.AppendLine("                return onHttpRequestCompleted(__filename, request, response, error, data, message);");
	sb.AppendLine("            });");
	sb.AppendLine("        }catch(error){");
	sb.AppendLine("            return onHttpRequestCompleted(__filename, request, response, error);");
	sb.AppendLine("        }");
	sb.AppendLine("    }");
	if(tableName.Equals("User")){
		sb.AppendLine("    const callGetUserProfile = (uid, emailAddress, id = null, employeeId = null, clientId = null, supplierId = null, callback) => {");
		sb.AppendLine("        try{");
		sb.AppendLine("            dbContext.executeScalarFunction(");
		sb.AppendLine("                `dbo`,");
		sb.AppendLine("                'GetUserProfile',");
		sb.AppendLine("                [");
		sb.AppendLine("                    {EmailAddress: emailAddress},");
		sb.AppendLine("                    {_id: id},");
		sb.AppendLine("                    {EmployeeId: employeeId},");
		sb.AppendLine("                    {ClientId: clientId},");
		sb.AppendLine("                    {SupplierId: supplierId}");
		sb.AppendLine("                ],");
		sb.AppendLine("                false,");
		sb.AppendLine("                callback);");
		sb.AppendLine("        }catch(error){");
		sb.AppendLine("            callback(error);");
		sb.AppendLine("        }finally{}");
		sb.AppendLine("    }");
		sb.AppendLine("    const callUpdateUserProfile = (uid, userProfile, callback) => {");
		sb.AppendLine("        try{");
		sb.AppendLine("            dbContext.update(uid, entityName, userProfile.User, callback);");
		sb.AppendLine("        }catch(error){");
		sb.AppendLine("            callback(error);");
		sb.AppendLine("        }finally{}");
		sb.AppendLine("    }");
	}
	sb.AppendLine("    return {");
	sb.AppendLine("        create: create,");
	sb.AppendLine("        getAll: getAll,");
	sb.AppendLine("        getById: getById,");
	sb.AppendLine("        getBy: getBy,");
	sb.AppendLine("        update: update,");
	sb.AppendLine("        delete: _delete,");
	if(tableName.Equals("User")){
		sb.AppendLine("        callGetUserProfile: callGetUserProfile,");
		sb.AppendLine("        onSuccessfulLogin: callUpdateUserProfile,");
		sb.AppendLine("        onSuccessfulLogout: callUpdateUserProfile,");
	}
	sb.AppendLine("    }");
	sb.AppendLine("}");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| module.exports");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("module.exports = Repository;");
	return sb.ToString();
}
private String templateMsSqlModelIdasGenioDbApiDefaultUserProfile(string createdBy, string dateCreated) {
	System.Text.StringBuilder sb = new StringBuilder();
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Author:		" + createdBy);
	sb.AppendLine("| Create date:	" + dateCreated);
	sb.AppendLine("| Description:	IDAS - Genio - API - Entity (Model) for the UserProfile");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| Function(s)");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("const UserProfile = () => {");
	sb.AppendLine("    const fromComponents = (user = {}, employee = {}, client = {}, supplier = {}, contactDetail = {}) => {");
	sb.AppendLine("        user.EmployeeId = employee._id;");
	sb.AppendLine("        user.ClientId = client._id;");
	sb.AppendLine("        user.SupplierId = supplier._id;");
	sb.AppendLine("        return {");
	sb.AppendLine("            User : user,");
	sb.AppendLine("            Employee : employee,");
	sb.AppendLine("            Client : client,");
	sb.AppendLine("            Supplier : supplier,");
	sb.AppendLine("            ContactDetail : contactDetail,");
	sb.AppendLine("        }");
	sb.AppendLine("    }");
	sb.AppendLine("    return {");
	sb.AppendLine("        fromComponents: fromComponents");
	sb.AppendLine("    }");
	sb.AppendLine("}");
	sb.AppendLine("");
	sb.AppendLine("/*");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine("| module.exports");
	sb.AppendLine("|--------------------------------------------------------------------------------------------------------------------------------------------");
	sb.AppendLine(" */");
	sb.AppendLine("module.exports = UserProfile;");
	return sb.ToString();
}

public class FileAttachment {
	public int FileAttachmentId;
	public string FileAttachmentSchemaName;
	public string FileAttachmentTableName;
	public string ObjectSchemaName;
	public string ObjectTableName;
	public object ObjectId;
	public object ObjectCreatedBy;
	public FileInfo File;
	public string FileName;
	public string FileExtension;
	public string ContentType;
	public string FileContent;
	public long FileSize;
	public string InsertQuery;
	public string AttachmentFile;
	public FileAttachment(string fileAttachmentSchemaName, string fileAttachmentTableName, string objectSchemaName, string objectTableName, object objectId, object objectCreatedBy, FileInfo file) {
		this.FileAttachmentId = -1;
		this.FileAttachmentSchemaName = fileAttachmentSchemaName;
		this.FileAttachmentTableName = fileAttachmentTableName;
		this.ObjectSchemaName = objectSchemaName;
		this.ObjectTableName = objectTableName;
		this.ObjectId = objectId;
		this.ObjectCreatedBy = objectCreatedBy;
		this.File = file;
		this.FileName = file.Name;
		this.FileExtension = (this.File.Extension != null && !this.File.Extension.Contains(this.File.Name) && this.File.Extension.Trim() != "." && this.File.Extension.Trim() != string.Empty) ? this.File.Extension : null;
		this.ContentType = (this.FileExtension != null) ? string.Format("application/{0}", this.FileExtension.Replace(".", "").Trim()) : null;
		this.FileContent = fileContentAsBase64String(this.File.FullName);
		this.FileSize = file.Length;
		this.InsertQuery = string.Format("INSERT INTO [{0}].[{1}]([{2}Id], [FileName], [FileExtension], [ContentType], [FileContent], [FileSize], [CreatedBy]) VALUES ({3}, {4}, {5}, {6}, {7}, {8}, {9}); SELECT SCOPE_IDENTITY();"
			, this.FileAttachmentSchemaName		// 0
			, this.FileAttachmentTableName		// 1
			, this.ObjectTableName				// 2
			, this.ObjectId						// 3
			, formatStringForInsertQuery(this.FileName)			// 4
			, formatStringForInsertQuery(this.FileExtension)	// 5
			, formatStringForInsertQuery(this.ContentType)		// 6
			, formatStringForInsertQuery(this.FileContent)		// 7
			, this.FileSize						// 8
			, this.ObjectCreatedBy				// 9
		);
	}
}

public static string formatStringForInsertQuery(string value) {
	return (value == null || value.Trim() == string.Empty) ? "NULL" : string.Format("'{0}'", value);
}
public static string fileContentAsBase64String(string path) {
	if(!File.Exists(path)) { return null; }
	Byte[] bytes = File.ReadAllBytes(path);
	String fileContent = Convert.ToBase64String(bytes);
	return fileContent;
}