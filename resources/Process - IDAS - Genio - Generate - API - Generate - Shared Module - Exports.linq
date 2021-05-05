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
	string rootSharedDirectory = @"C:\Users\A236978\Documents\Personal\Projects\Izingodla\idas-v.0.2\idas-ui\src\app\shared";
	string[] allRootSharedExportDirectoryFiles = System.IO.Directory.EnumerateFiles(rootSharedDirectory, "*.*", SearchOption.AllDirectories).ToArray();
	allRootSharedExportDirectoryFiles
		.Select((file) => "export { " + String.Join("", System.IO.Path.GetFileNameWithoutExtension(file).Split(new char[]{'-', '.'}).Select((item) => CapitalizeFirstLetter(item).Trim()).ToArray()) + " } from '" + file.Replace(rootSharedDirectory, ".").Replace("\\", "/").Replace(".ts", "") + "';")
		.Dump();
}

// Define other methods and classes here
public string SplitCamelCase(string str)
{
	return Regex.Replace( Regex.Replace( str, @"(\P{Ll})(\P{Ll}\p{Ll})", "$1 $2" ), @"(\p{Ll})(\P{Ll})", "$1 $2" );
}
public string CapitalizeFirstLetter(string str)
{
	return String.IsNullOrEmpty(str) ? String.Empty : str.First().ToString().ToUpper() + str.Substring(1);
}