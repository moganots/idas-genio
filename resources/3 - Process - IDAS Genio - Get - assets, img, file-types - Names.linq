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
	// ===================== Directory(ies) : IDAS UI - src, assets, img, file-types, etc.) ===============================================
	string directoryIdasGenioUi = System.IO.Path.Combine(directoryIdasGenioRoot, "idas-ui");
	string directoryIdasGenioUiSrc = System.IO.Path.Combine(directoryIdasGenioUi, "src");
	string directoryIdasGenioUiSrcAssets = System.IO.Path.Combine(directoryIdasGenioUiSrc, "assets");
	string directoryIdasGenioUiSrcAssetsImg = System.IO.Path.Combine(directoryIdasGenioUiSrcAssets, "img");
	string directoryIdasGenioUiSrcAssetsImgFileTypes = System.IO.Path.Combine(directoryIdasGenioUiSrcAssetsImg, "file-types");
	string[] fileTypes = System.IO.Directory.EnumerateFiles(directoryIdasGenioUiSrcAssetsImgFileTypes, "*.*", SearchOption.AllDirectories).ToArray();
	fileTypes.Select((fileType) => String.Format("`{0}`,", System.IO.Path.GetFileNameWithoutExtension(fileType))).Dump();
	
	
	//idas-genio\idas-ui\src\assets\img\file-types
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