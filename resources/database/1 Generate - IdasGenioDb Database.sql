
PRINT ('>> Starting')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO

USE [master]
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Drop the database
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

IF EXISTS(SELECT TOP 1 1 FROM [sys].[databases] WHERE [name] = N'IdasGenioDb')
BEGIN
	DROP DATABASE [IdasGenioDb]
	PRINT ('>> Dropped the [IdasGenioDb] database, successfully')
END
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Create the database
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE DATABASE [IdasGenioDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'IdasGenioDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\IdasGenioDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'IdasGenioDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\IdasGenioDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO

ALTER DATABASE [IdasGenioDb] SET COMPATIBILITY_LEVEL = 140
GO

PRINT ('>> [IdasGenioDb] database compatibility set, successfully')
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
BEGIN
	EXEC [IdasGenioDb].[dbo].[sp_fulltext_database] @action = 'enable'

	PRINT ('>> [IdasGenioDb] database fulltext enabled, successfully')
END
GO

ALTER DATABASE [IdasGenioDb] SET ANSI_NULL_DEFAULT OFF 
GO

PRINT ('>> [IdasGenioDb] database ANSI_NULL_DEFAULT set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET ANSI_NULLS OFF 
GO

PRINT ('>> [IdasGenioDb] database ANSI_NULLS set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET ANSI_PADDING OFF 
GO

PRINT ('>> [IdasGenioDb] database ANSI_PADDING set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET ANSI_WARNINGS OFF 
GO

PRINT ('>> [IdasGenioDb] database ANSI_WARNINGS set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET ARITHABORT OFF 
GO

PRINT ('>> [IdasGenioDb] database ARITHABORT set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET AUTO_CLOSE OFF 
GO

PRINT ('>> [IdasGenioDb] database AUTO_CLOSE set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET AUTO_SHRINK OFF 
GO

PRINT ('>> [IdasGenioDb] database AUTO_SHRINK set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET AUTO_UPDATE_STATISTICS ON 
GO

PRINT ('>> [IdasGenioDb] database AUTO_UPDATE_STATISTICS set ON, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

PRINT ('>> [IdasGenioDb] database CURSOR_CLOSE_ON_COMMIT set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET CURSOR_DEFAULT  GLOBAL 
GO

PRINT ('>> [IdasGenioDb] database CURSOR_DEFAULT set GLOBAL, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

PRINT ('>> [IdasGenioDb] database CONCAT_NULL_YIELDS_NULL set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET NUMERIC_ROUNDABORT OFF 
GO

PRINT ('>> [IdasGenioDb] database NUMERIC_ROUNDABORT set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET QUOTED_IDENTIFIER OFF 
GO

PRINT ('>> [IdasGenioDb] database QUOTED_IDENTIFIER set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET RECURSIVE_TRIGGERS OFF 
GO

PRINT ('>> [IdasGenioDb] database RECURSIVE_TRIGGERS set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET  DISABLE_BROKER 
GO

PRINT ('>> [IdasGenioDb] database DISABLE_BROKER set, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

PRINT ('>> [IdasGenioDb] database AUTO_UPDATE_STATISTICS_ASYNC set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

PRINT ('>> [IdasGenioDb] database DATE_CORRELATION_OPTIMIZATION set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET TRUSTWORTHY OFF 
GO

PRINT ('>> [IdasGenioDb] database TRUSTWORTHY set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

PRINT ('>> [IdasGenioDb] database ALLOW_SNAPSHOT_ISOLATION set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET PARAMETERIZATION SIMPLE 
GO

PRINT ('>> [IdasGenioDb] database PARAMETERIZATION set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO

PRINT ('>> [IdasGenioDb] database READ_COMMITTED_SNAPSHOT set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET HONOR_BROKER_PRIORITY OFF 
GO

PRINT ('>> [IdasGenioDb] database HONOR_BROKER_PRIORITY set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET RECOVERY SIMPLE 
GO

PRINT ('>> [IdasGenioDb] database RECOVERY set SIMPLE, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET  MULTI_USER 
GO

PRINT ('>> [IdasGenioDb] database MULTI_USER set, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET PAGE_VERIFY CHECKSUM  
GO

PRINT ('>> [IdasGenioDb] database PAGE_VERIFY set CHECKSUM, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET DB_CHAINING OFF 
GO

PRINT ('>> [IdasGenioDb] database DB_CHAINING set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

PRINT ('>> [IdasGenioDb] database FILESTREAM( NON_TRANSACTED_ACCESS ) set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

PRINT ('>> [IdasGenioDb] database TARGET_RECOVERY_TIME set 60 SECONDS, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET DELAYED_DURABILITY = DISABLED 
GO

PRINT ('>> [IdasGenioDb] database DELAYED_DURABILITY set DISABLED, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET QUERY_STORE = OFF
GO

PRINT ('>> [IdasGenioDb] database QUERY_STORE set OFF, successfully')
GO

ALTER DATABASE [IdasGenioDb] SET  READ_WRITE 
GO

PRINT ('>> [IdasGenioDb] database READ_WRITE set, successfully')
GO

PRINT ('>> [IdasGenioDb] database creation and setup, successful')
GO

USE [IdasGenioDb];
GO

IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

PRINT ('>> [IdasGenioDb] [dbo] schema created, successful')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

PRINT ('>> Completed > Drop existing FOREIGN KEY constraints')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Dropping existing tables
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

IF (OBJECT_ID(N'[dbo].[Client]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Client];
	PRINT ('>> Completed > Drop table [dbo].[Client], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[ContactDetail]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ContactDetail];
	PRINT ('>> Completed > Drop table [dbo].[ContactDetail], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[Department]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Department];
	PRINT ('>> Completed > Drop table [dbo].[Department], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[Employee]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Employee];
	PRINT ('>> Completed > Drop table [dbo].[Employee], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[EmployeeSalary]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[EmployeeSalary];
	PRINT ('>> Completed > Drop table [dbo].[EmployeeSalary], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[Entity]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Entity];
	PRINT ('>> Completed > Drop table [dbo].[Entity], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[EntityRelationship]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[EntityRelationship];
	PRINT ('>> Completed > Drop table [dbo].[EntityRelationship], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[EntityUserGroupCapacity]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[EntityUserGroupCapacity];
	PRINT ('>> Completed > Drop table [dbo].[EntityUserGroupCapacity], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[LookupCategory]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[LookupCategory];
	PRINT ('>> Completed > Drop table [dbo].[LookupCategory], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[LookupValue]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[LookupValue];
	PRINT ('>> Completed > Drop table [dbo].[LookupValue], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[MenuItem]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[MenuItem];
	PRINT ('>> Completed > Drop table [dbo].[MenuItem], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[MenuItemUser]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[MenuItemUser];
	PRINT ('>> Completed > Drop table [dbo].[MenuItemUser], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[GroupMenuItem]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[GroupMenuItem];
	PRINT ('>> Completed > Drop table [dbo].[GroupMenuItem], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[Project]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Project];
	PRINT ('>> Completed > Drop table [dbo].[Project], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectAssignment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectAssignment];
	PRINT ('>> Completed > Drop table [dbo].[ProjectAssignment], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectComment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectComment];
	PRINT ('>> Completed > Drop table [dbo].[ProjectComment], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectStatus]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectStatus];
	PRINT ('>> Completed > Drop table [dbo].[ProjectStatus], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectWorkLog]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectWorkLog];
	PRINT ('>> Completed > Drop table [dbo].[ProjectWorkLog], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[Task]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Task];
	PRINT ('>> Completed > Drop table [dbo].[Task], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskAssignment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskAssignment];
	PRINT ('>> Completed > Drop table [dbo].[TaskAssignment], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskComment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskComment];
	PRINT ('>> Completed > Drop table [dbo].[TaskComment], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskStatus]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskStatus];
	PRINT ('>> Completed > Drop table [dbo].[TaskStatus], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskWorkLog]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskWorkLog];
	PRINT ('>> Completed > Drop table [dbo].[TaskWorkLog], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[User]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[User];
	PRINT ('>> Completed > Drop table [dbo].[User], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[UserGroup]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserGroup];
	PRINT ('>> Completed > Drop table [dbo].[UserGroup], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[UserGroupCapacity]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserGroupCapacity];
	PRINT ('>> Completed > Drop table [dbo].[UserGroupCapacity], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[UserLocks]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserLocks];
	PRINT ('>> Completed > Drop table [dbo].[UserLocks], successful')
END
GO

IF (OBJECT_ID(N'[dbo].[UserTransaction]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserTransaction];
	PRINT ('>> Completed > Drop table [dbo].[UserTransaction], successful')
END
GO

PRINT ('>> Completed > Drop existing tables')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Creating all tables
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

-- Create the [dbo].[Employee] table
CREATE TABLE [dbo].[Employee](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeNumber] [nvarchar] (10) NOT NULL,
	[SalutationId] [bigint] NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[MiddleName] [nvarchar] (255) NULL,
	[Surname] [nvarchar] (255) NOT NULL,
	[IdNumber] [bigint]  NOT NULL,
	[BirthDate] [date] NOT NULL,
	[GenderId] [bigint]  NOT NULL,
	[EmploymentTypeId] [bigint] NOT NULL,
	[PositionId] [bigint] NOT NULL,
	[DepartmentId] [bigint] NOT NULL,
	[ManagerId] [bigint] NULL,
	[DateHired] [datetime] NOT NULL,
	[IsTerminated] [bit] NULL,
	[DateTerminated] [datetime] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[Employee] table, successfully')
GO

-- Create the [dbo].[Department] table
CREATE TABLE [dbo].[Department](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar] (35) NOT NULL,
	[BudgetCodeId] [bigint] NULL,
	[ManagerId] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[Department] table, successfully')
GO

-- Create the [dbo].[Client] table
CREATE TABLE [dbo].[Client](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[SalutationId] [bigint] NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[Surname] [nvarchar] (255) NOT NULL,
	[CompanyName] [nvarchar] (255) NOT NULL,
	[IndustryTypeId] [bigint] NOT NULL,
	[IdNumber] [bigint] NULL,
	[RegistrationNumber] [nvarchar] (255) NULL,
	[VATNumber] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[Client] table, successfully')
GO

-- Create the [dbo].[ContactDetail] table
CREATE TABLE [dbo].[ContactDetail](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NULL,
	[DepartmentId] [bigint] NULL,
	[ClientId] [bigint] NULL,
	[SupplierId] [bigint] NULL,
	[RecipientsName] [nvarchar] (255) NULL,
	[TelephoneNumber] [bigint] NOT NULL,
	[OfficeTelephoneNumber] [bigint] NULL,
	[MobileTelephoneNumber] [bigint] NULL,
	[EmailAddress] [nvarchar] (320) NOT NULL,
	[PreferredLanguageId] [bigint] NULL,
	[UseEmailAddress] [bit] NULL,
	[UseTelephoneNumber] [bit] NULL,
	[Website] [nvarchar] (max) NULL,
	[AddressLine1] [nvarchar] (30) NULL,
	[AddressLine2] [nvarchar] (30) NULL,
	[City] [nvarchar] (30) NULL,
	[ProvinceId] [bigint] NULL,
	[PostalCode] [nvarchar] (30) NULL,
	[Country] [nvarchar] (30) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_ContactDetail] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[ContactDetail] table, successfully')
GO

-- Create the [dbo].[EmployeeSalary] table
CREATE TABLE [dbo].[EmployeeSalary](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NOT NULL,
	[WageTypeId] [bigint] NOT NULL,
	[Amount] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_EmployeeSalary] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[EmployeeSalary] table, successfully')
GO

-- Create the [dbo].[Project] table
CREATE TABLE [dbo].[Project](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[Description] [nvarchar] (255) NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[MaximumHoursAllocated] AS (DATEDIFF(HOUR, [StartDate], [EndDate])),
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[Project] table, successfully')
GO

-- Create the [dbo].[ProjectAssignment] table
CREATE TABLE [dbo].[ProjectAssignment](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[ProjectAssignmentTypeId] [bigint] NOT NULL,
	[CurrentAssigneeId] [bigint] NOT NULL,
	[PreviousAssigneeId] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_ProjectAssignment] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[ProjectAssignment] table, successfully')
GO

-- Create the [dbo].[ProjectComment] table
CREATE TABLE [dbo].[ProjectComment](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[Comment] [nvarchar] (max) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_ProjectComment] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[ProjectComment] table, successfully')
GO

-- Create the [dbo].[ProjectWorkLog] table
CREATE TABLE [dbo].[ProjectWorkLog](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[Description] [nvarchar] (max) NOT NULL,
	[HoursWorked] AS (DATEDIFF(HOUR, [StartDate], GETDATE())),
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_ProjectWorkLog] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[ProjectWorkLog] table, successfully')
GO

-- Create the [dbo].[ProjectStatus] table
CREATE TABLE [dbo].[ProjectStatus](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[StatusId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_ProjectStatus] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[ProjectStatus] table, successfully')
GO

-- Create the [dbo].[Task] table
CREATE TABLE [dbo].[Task](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[Summary] [nvarchar] (255) NOT NULL,
	[Description] [nvarchar] (500) NOT NULL,
	[SubTaskId] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[Task] table, successfully')
GO

-- Create the [dbo].[TaskAssignment] table
CREATE TABLE [dbo].[TaskAssignment](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskId] [bigint] NOT NULL,
	[CurrentAssigneeId] [bigint] NOT NULL,
	[PreviousAssigneeId] [bigint] NULL,
	[AssignedBy] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_TaskAssignment] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[TaskAssignment] table, successfully')
GO

-- Create the [dbo].[TaskComment] table
CREATE TABLE [dbo].[TaskComment](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskId] [bigint] NOT NULL,
	[Comment] [nvarchar] (max) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_TaskComment] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[TaskComment] table, successfully')
GO

-- Create the [dbo].[TaskWorkLog] table
CREATE TABLE [dbo].[TaskWorkLog](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskId] [bigint] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[Description] [nvarchar] (max) NOT NULL,
	[HoursWorked] AS (DATEDIFF(HOUR, [StartDate], GETDATE())),
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_TaskWorkLog] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[TaskWorkLog] table, successfully')
GO

-- Create the [dbo].[TaskStatus] table
CREATE TABLE [dbo].[TaskStatus](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskId] [bigint] NOT NULL,
	[StatusId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_TaskStatus] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[TaskStatus] table, successfully')
GO

-- Create the [dbo].[LookupCategory] table
CREATE TABLE [dbo].[LookupCategory](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar] (255) NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[Description] [nvarchar] (255) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_LookupCategory] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[LookupCategory] table, successfully')
GO

-- Create the [dbo].[LookupValue] table
CREATE TABLE [dbo].[LookupValue](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[LookupCategoryId] [bigint] NOT NULL,
	[Value] [nvarchar] (255) NOT NULL,
	[Value2] [nvarchar] (255) NULL,
	[Value3] [nvarchar] (255) NULL,
	[Image] [nvarchar] (255) NULL,
	[Icon] [nvarchar] (255) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_LookupValue] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[LookupValue] table, successfully')
GO

-- Create the [dbo].[User] table
CREATE TABLE [dbo].[User](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NULL,
	[ClientId] [bigint] NULL,
	[SupplierId] [bigint] NULL,
	[EmailAddress] [nvarchar] (320) NOT NULL,
	[Password] [nvarchar] (255) NOT NULL,
	[IsAdmin] [bit] NULL,
	[IsLocked] [bit] NULL,
	[IsActive] [bit] NULL,
	[DateLastLoggedIn] [datetime] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[User] table, successfully')
GO

-- Create the [dbo].[UserGroup] table
CREATE TABLE [dbo].[UserGroup](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[GroupId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_UserGroup] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[UserGroup] table, successfully')
GO

-- Create the [dbo].[UserGroupCapacity] table
CREATE TABLE [dbo].[UserGroupCapacity](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[UserGroupId] [bigint] NOT NULL,
	[CapacityId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_UserGroupCapacity] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[UserGroupCapacity] table, successfully')
GO

-- Create the [dbo].[UserLocks] table
CREATE TABLE [dbo].[UserLocks](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[UserLockReasonId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_UserLocks] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[UserLocks] table, successfully')
GO

-- Create the [dbo].[UserTransaction] table
CREATE TABLE [dbo].[UserTransaction](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[TransactionTypeId] [bigint] NOT NULL,
	[EntityId] [bigint] NOT NULL,
	[TransactionPayload] [nvarchar] (max) NOT NULL,
	[TransactionResult] [nvarchar] (max) NOT NULL,
	[IsTransactionSuccessful] [bit] NOT NULL,
	[TransactionMessage] [nvarchar] (max) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_UserTransaction] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[UserTransaction] table, successfully')
GO

-- Create the [dbo].[Entity] table
CREATE TABLE [dbo].[Entity](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[Description] [nvarchar] (500) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_Entity] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[Entity] table, successfully')
GO

-- Create the [dbo].[EntityRelationship] table
CREATE TABLE [dbo].[EntityRelationship](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ParentEntityId] [bigint] NOT NULL,
	[ParentEntityColumnName] [nvarchar] (255) NOT NULL,
	[ChildEntityId] [bigint] NOT NULL,
	[ChildEntityColumnName] [nvarchar] (255) NOT NULL,
	[RelationshipName] [nvarchar] (255) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_EntityRelationship] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[EntityRelationship] table, successfully')
GO

-- Create the [dbo].[EntityUserGroupCapacity] table
CREATE TABLE [dbo].[EntityUserGroupCapacity](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EntityId] [bigint] NOT NULL,
	[UserGroupId] [bigint] NOT NULL,
	[CanCreate] [bit] NULL,
	[CanView] [bit] NULL,
	[CanChange] [bit] NULL,
	[CanDelete] [bit] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_EntityUserGroupCapacity] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[EntityUserGroupCapacity] table, successfully')
GO

-- Create the [dbo].[MenuItem] table
CREATE TABLE [dbo].[MenuItem](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Path] [nvarchar] (255) NOT NULL,
	[Title] [nvarchar] (255) NOT NULL,
	[Image] [nvarchar] (255) NULL,
	[Icon] [nvarchar] (255) NULL,
	[Class] [nvarchar] (255) NULL,
	[Configuration] [nvarchar] (255) NOT NULL,
	[Component] [nvarchar] (255) NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_MenuItem] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[MenuItem] table, successfully')
GO

-- Create the [dbo].[MenuItemUser] table
CREATE TABLE [dbo].[MenuItemUser](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[MenuItemId] [bigint] NOT NULL,
	[UserId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_MenuItemUser] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[MenuItemUser] table, successfully')
GO

-- Create the [dbo].[GroupMenuItem] table
CREATE TABLE [dbo].[GroupMenuItem](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[GroupId] [bigint] NOT NULL,
	[MenuItemId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_GroupMenuItem] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[GroupMenuItem] table, successfully')
GO

-- Create the [dbo].[Supplier] table
CREATE TABLE [dbo].[Supplier](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[SalutationId] [bigint] NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[Surname] [nvarchar] (255) NOT NULL,
	[CompanyName] [nvarchar] (255) NULL,
	[IndustryTypeId] [bigint] NOT NULL,
	[IdNumber] [bigint] NULL,
	[RegistrationNumber] [nvarchar] (255) NULL,
	[VATNumber] [bigint] NULL,
	[BankId] [bigint] NULL,
	[AccountNumber] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_Supplier] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[Supplier] table, successfully')
GO

PRINT ('>> Completed > Creating tables')
GO

CREATE VIEW [dbo].[vwRandomEmployeeNumber]
AS
SELECT CAST((RAND() * (899999) + 100000) AS BIGINT) AS [REN]

GO

PRINT ('>> Completed > Creating views')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

ALTER TABLE [dbo].[Client]  WITH CHECK ADD  CONSTRAINT [FK_Client_LookupValue_IndustryTypeId] FOREIGN KEY([IndustryTypeId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Client] CHECK CONSTRAINT [FK_Client_LookupValue_IndustryTypeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Client_LookupValue_IndustryTypeId] on table [dbo].[Client]')
GO

ALTER TABLE [dbo].[Client]  WITH CHECK ADD  CONSTRAINT [FK_Client_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Client] CHECK CONSTRAINT [FK_Client_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Client_User_CreatedBy] on table [dbo].[Client]')
GO

ALTER TABLE [dbo].[Client]  WITH CHECK ADD  CONSTRAINT [FK_Client_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Client] CHECK CONSTRAINT [FK_Client_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Client_User_ModifiedBy] on table [dbo].[Client]')
GO

ALTER TABLE [dbo].[Client]  WITH CHECK ADD  CONSTRAINT [FK_Client_LookupValue_SalutationId] FOREIGN KEY([SalutationId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Client] CHECK CONSTRAINT [FK_Client_LookupValue_SalutationId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Client_LookupValue_SalutationId] on table [dbo].[Client]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_Employee_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_Employee_EmployeeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_Employee_EmployeeId] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_Department_DepartmentId] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_Department_DepartmentId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_Department_DepartmentId] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_Client_ClientId] FOREIGN KEY([ClientId])
REFERENCES [dbo].[Client] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_Client_ClientId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_Client_ClientId] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_LookupValue_PreferredLanguageId] FOREIGN KEY([PreferredLanguageId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_LookupValue_PreferredLanguageId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_LookupValue_PreferredLanguageId] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_LookupValue_ProvinceId] FOREIGN KEY([ProvinceId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_LookupValue_ProvinceId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_LookupValue_ProvinceId] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_User_CreatedBy] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_User_ModifiedBy] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[ContactDetail]  WITH CHECK ADD  CONSTRAINT [FK_ContactDetail_Supplier_SupplierId] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Supplier] ([_id])
GO

ALTER TABLE [dbo].[ContactDetail] CHECK CONSTRAINT [FK_ContactDetail_Supplier_SupplierId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ContactDetail_Supplier_SupplierId] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[Department]  WITH CHECK ADD  CONSTRAINT [FK_Department_LookupValue_BudgetCodeId] FOREIGN KEY([BudgetCodeId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Department] CHECK CONSTRAINT [FK_Department_LookupValue_BudgetCodeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Department_LookupValue_BudgetCodeId] on table [dbo].[Department]')
GO

ALTER TABLE [dbo].[Department]  WITH CHECK ADD  CONSTRAINT [FK_Department_Employee_ManagerId] FOREIGN KEY([ManagerId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[Department] CHECK CONSTRAINT [FK_Department_Employee_ManagerId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Department_Employee_ManagerId] on table [dbo].[Department]')
GO

ALTER TABLE [dbo].[Department]  WITH CHECK ADD  CONSTRAINT [FK_Department_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Department] CHECK CONSTRAINT [FK_Department_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Department_User_CreatedBy] on table [dbo].[Department]')
GO

ALTER TABLE [dbo].[Department]  WITH CHECK ADD  CONSTRAINT [FK_Department_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Department] CHECK CONSTRAINT [FK_Department_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Department_User_ModifiedBy] on table [dbo].[Department]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_LookupValue_GenderId] FOREIGN KEY([GenderId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_LookupValue_GenderId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_LookupValue_GenderId] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_LookupValue_EmploymentTypeId] FOREIGN KEY([EmploymentTypeId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_LookupValue_EmploymentTypeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_LookupValue_EmploymentTypeId] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_LookupValue_PositionId] FOREIGN KEY([PositionId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_LookupValue_PositionId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_LookupValue_PositionId] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_LookupValue_DepartmentId] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_LookupValue_DepartmentId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_LookupValue_DepartmentId] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_User_CreatedBy] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_User_ModifiedBy] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_LookupValue_SalutationId] FOREIGN KEY([SalutationId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_LookupValue_SalutationId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_LookupValue_SalutationId] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_Employee_ManagerId] FOREIGN KEY([ManagerId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_Employee_ManagerId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Employee_Employee_ManagerId] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[EmployeeSalary]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeSalary_Employee_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[EmployeeSalary] CHECK CONSTRAINT [FK_EmployeeSalary_Employee_EmployeeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EmployeeSalary_Employee_EmployeeId] on table [dbo].[EmployeeSalary]')
GO

ALTER TABLE [dbo].[EmployeeSalary]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeSalary_LookupValue_WageTypeId] FOREIGN KEY([WageTypeId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[EmployeeSalary] CHECK CONSTRAINT [FK_EmployeeSalary_LookupValue_WageTypeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EmployeeSalary_LookupValue_WageTypeId] on table [dbo].[EmployeeSalary]')
GO

ALTER TABLE [dbo].[EmployeeSalary]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeSalary_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[EmployeeSalary] CHECK CONSTRAINT [FK_EmployeeSalary_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EmployeeSalary_User_CreatedBy] on table [dbo].[EmployeeSalary]')
GO

ALTER TABLE [dbo].[EmployeeSalary]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeSalary_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[EmployeeSalary] CHECK CONSTRAINT [FK_EmployeeSalary_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EmployeeSalary_User_ModifiedBy] on table [dbo].[EmployeeSalary]')
GO

ALTER TABLE [dbo].[Entity]  WITH CHECK ADD  CONSTRAINT [FK_Entity_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Entity] CHECK CONSTRAINT [FK_Entity_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Entity_User_CreatedBy] on table [dbo].[Entity]')
GO

ALTER TABLE [dbo].[Entity]  WITH CHECK ADD  CONSTRAINT [FK_Entity_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Entity] CHECK CONSTRAINT [FK_Entity_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Entity_User_ModifiedBy] on table [dbo].[Entity]')
GO

ALTER TABLE [dbo].[EntityRelationship]  WITH CHECK ADD  CONSTRAINT [FK_EntityRelationship_Entity_ParentEntityId] FOREIGN KEY([ParentEntityId])
REFERENCES [dbo].[Entity] ([_id])
GO

ALTER TABLE [dbo].[EntityRelationship] CHECK CONSTRAINT [FK_EntityRelationship_Entity_ParentEntityId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityRelationship_Entity_ParentEntityId] on table [dbo].[EntityRelationship]')
GO

ALTER TABLE [dbo].[EntityRelationship]  WITH CHECK ADD  CONSTRAINT [FK_EntityRelationship_Entity_ChildEntityId] FOREIGN KEY([ChildEntityId])
REFERENCES [dbo].[Entity] ([_id])
GO

ALTER TABLE [dbo].[EntityRelationship] CHECK CONSTRAINT [FK_EntityRelationship_Entity_ChildEntityId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityRelationship_Entity_ChildEntityId] on table [dbo].[EntityRelationship]')
GO

ALTER TABLE [dbo].[EntityRelationship]  WITH CHECK ADD  CONSTRAINT [FK_EntityRelationship_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[EntityRelationship] CHECK CONSTRAINT [FK_EntityRelationship_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityRelationship_User_CreatedBy] on table [dbo].[EntityRelationship]')
GO

ALTER TABLE [dbo].[EntityRelationship]  WITH CHECK ADD  CONSTRAINT [FK_EntityRelationship_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[EntityRelationship] CHECK CONSTRAINT [FK_EntityRelationship_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityRelationship_User_ModifiedBy] on table [dbo].[EntityRelationship]')
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_EntityUserGroupCapacity_Entity_EntityId] FOREIGN KEY([EntityId])
REFERENCES [dbo].[Entity] ([_id])
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity] CHECK CONSTRAINT [FK_EntityUserGroupCapacity_Entity_EntityId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityUserGroupCapacity_Entity_EntityId] on table [dbo].[EntityUserGroupCapacity]')
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_EntityUserGroupCapacity_UserGroup_UserGroupId] FOREIGN KEY([UserGroupId])
REFERENCES [dbo].[UserGroup] ([_id])
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity] CHECK CONSTRAINT [FK_EntityUserGroupCapacity_UserGroup_UserGroupId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityUserGroupCapacity_UserGroup_UserGroupId] on table [dbo].[EntityUserGroupCapacity]')
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_EntityUserGroupCapacity_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity] CHECK CONSTRAINT [FK_EntityUserGroupCapacity_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityUserGroupCapacity_User_CreatedBy] on table [dbo].[EntityUserGroupCapacity]')
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_EntityUserGroupCapacity_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity] CHECK CONSTRAINT [FK_EntityUserGroupCapacity_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_EntityUserGroupCapacity_User_ModifiedBy] on table [dbo].[EntityUserGroupCapacity]')
GO

ALTER TABLE [dbo].[GroupMenuItem]  WITH CHECK ADD  CONSTRAINT [FK_GroupMenuItem_MenuItem_MenuItemId] FOREIGN KEY([MenuItemId])
REFERENCES [dbo].[MenuItem] ([_id])
GO

ALTER TABLE [dbo].[GroupMenuItem] CHECK CONSTRAINT [FK_GroupMenuItem_MenuItem_MenuItemId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_GroupMenuItem_MenuItem_MenuItemId] on table [dbo].[GroupMenuItem]')
GO

ALTER TABLE [dbo].[GroupMenuItem]  WITH CHECK ADD  CONSTRAINT [FK_GroupMenuItem_LookupValue_GroupId] FOREIGN KEY([GroupId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[GroupMenuItem] CHECK CONSTRAINT [FK_GroupMenuItem_LookupValue_GroupId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_GroupMenuItem_LookupValue_GroupId] on table [dbo].[GroupMenuItem]')
GO

ALTER TABLE [dbo].[GroupMenuItem]  WITH CHECK ADD  CONSTRAINT [FK_GroupMenuItem_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[GroupMenuItem] CHECK CONSTRAINT [FK_GroupMenuItem_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_GroupMenuItem_User_CreatedBy] on table [dbo].[GroupMenuItem]')
GO

ALTER TABLE [dbo].[GroupMenuItem]  WITH CHECK ADD  CONSTRAINT [FK_GroupMenuItem_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[GroupMenuItem] CHECK CONSTRAINT [FK_GroupMenuItem_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_GroupMenuItem_User_ModifiedBy] on table [dbo].[GroupMenuItem]')
GO

ALTER TABLE [dbo].[LookupCategory]  WITH CHECK ADD  CONSTRAINT [FK_LookupCategory_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[LookupCategory] CHECK CONSTRAINT [FK_LookupCategory_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_LookupCategory_User_CreatedBy] on table [dbo].[LookupCategory]')
GO

ALTER TABLE [dbo].[LookupCategory]  WITH CHECK ADD  CONSTRAINT [FK_LookupCategory_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[LookupCategory] CHECK CONSTRAINT [FK_LookupCategory_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_LookupCategory_User_ModifiedBy] on table [dbo].[LookupCategory]')
GO

ALTER TABLE [dbo].[LookupValue]  WITH CHECK ADD  CONSTRAINT [FK_LookupValue_LookupCategory_LookupCategoryId] FOREIGN KEY([LookupCategoryId])
REFERENCES [dbo].[LookupCategory] ([_id])
GO

ALTER TABLE [dbo].[LookupValue] CHECK CONSTRAINT [FK_LookupValue_LookupCategory_LookupCategoryId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_LookupValue_LookupCategory_LookupCategoryId] on table [dbo].[LookupValue]')
GO

ALTER TABLE [dbo].[LookupValue]  WITH CHECK ADD  CONSTRAINT [FK_LookupValue_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[LookupValue] CHECK CONSTRAINT [FK_LookupValue_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_LookupValue_User_CreatedBy] on table [dbo].[LookupValue]')
GO

ALTER TABLE [dbo].[LookupValue]  WITH CHECK ADD  CONSTRAINT [FK_LookupValue_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[LookupValue] CHECK CONSTRAINT [FK_LookupValue_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_LookupValue_User_ModifiedBy] on table [dbo].[LookupValue]')
GO

ALTER TABLE [dbo].[MenuItem]  WITH CHECK ADD  CONSTRAINT [FK_MenuItem_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[MenuItem] CHECK CONSTRAINT [FK_MenuItem_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_MenuItem_User_CreatedBy] on table [dbo].[MenuItem]')
GO

ALTER TABLE [dbo].[MenuItem]  WITH CHECK ADD  CONSTRAINT [FK_MenuItem_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[MenuItem] CHECK CONSTRAINT [FK_MenuItem_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_MenuItem_User_ModifiedBy] on table [dbo].[MenuItem]')
GO

ALTER TABLE [dbo].[MenuItemUser]  WITH CHECK ADD  CONSTRAINT [FK_MenuItemUser_MenuItem_MenuItemId] FOREIGN KEY([MenuItemId])
REFERENCES [dbo].[MenuItem] ([_id])
GO

ALTER TABLE [dbo].[MenuItemUser] CHECK CONSTRAINT [FK_MenuItemUser_MenuItem_MenuItemId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_MenuItemUser_MenuItem_MenuItemId] on table [dbo].[MenuItemUser]')
GO

ALTER TABLE [dbo].[MenuItemUser]  WITH CHECK ADD  CONSTRAINT [FK_MenuItemUser_User_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[MenuItemUser] CHECK CONSTRAINT [FK_MenuItemUser_User_UserId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_MenuItemUser_User_UserId] on table [dbo].[MenuItemUser]')
GO

ALTER TABLE [dbo].[MenuItemUser]  WITH CHECK ADD  CONSTRAINT [FK_MenuItemUser_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[MenuItemUser] CHECK CONSTRAINT [FK_MenuItemUser_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_MenuItemUser_User_CreatedBy] on table [dbo].[MenuItemUser]')
GO

ALTER TABLE [dbo].[MenuItemUser]  WITH CHECK ADD  CONSTRAINT [FK_MenuItemUser_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[MenuItemUser] CHECK CONSTRAINT [FK_MenuItemUser_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_MenuItemUser_User_ModifiedBy] on table [dbo].[MenuItemUser]')
GO

ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Project_User_CreatedBy] on table [dbo].[Project]')
GO

ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Project_User_ModifiedBy] on table [dbo].[Project]')
GO

ALTER TABLE [dbo].[ProjectAssignment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssignment_Project_ProjectId] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([_id])
GO

ALTER TABLE [dbo].[ProjectAssignment] CHECK CONSTRAINT [FK_ProjectAssignment_Project_ProjectId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectAssignment_Project_ProjectId] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectAssignment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssignment_Employee_PreviousAssigneeId] FOREIGN KEY([PreviousAssigneeId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[ProjectAssignment] CHECK CONSTRAINT [FK_ProjectAssignment_Employee_PreviousAssigneeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectAssignment_Employee_PreviousAssigneeId] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectAssignment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssignment_Employee_CurrentAssigneeId] FOREIGN KEY([CurrentAssigneeId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[ProjectAssignment] CHECK CONSTRAINT [FK_ProjectAssignment_Employee_CurrentAssigneeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectAssignment_Employee_CurrentAssigneeId] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectAssignment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssignment_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectAssignment] CHECK CONSTRAINT [FK_ProjectAssignment_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectAssignment_User_CreatedBy] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectAssignment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssignment_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectAssignment] CHECK CONSTRAINT [FK_ProjectAssignment_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectAssignment_User_ModifiedBy] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectAssignment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectAssignment_LookupValue_ProjectAssignmentTypeId] FOREIGN KEY([ProjectAssignmentTypeId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[ProjectAssignment] CHECK CONSTRAINT [FK_ProjectAssignment_LookupValue_ProjectAssignmentTypeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectAssignment_LookupValue_ProjectAssignmentTypeId] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectComment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectComment_Project_ProjectId] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([_id])
GO

ALTER TABLE [dbo].[ProjectComment] CHECK CONSTRAINT [FK_ProjectComment_Project_ProjectId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectComment_Project_ProjectId] on table [dbo].[ProjectComment]')
GO

ALTER TABLE [dbo].[ProjectComment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectComment_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectComment] CHECK CONSTRAINT [FK_ProjectComment_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectComment_User_CreatedBy] on table [dbo].[ProjectComment]')
GO

ALTER TABLE [dbo].[ProjectComment]  WITH CHECK ADD  CONSTRAINT [FK_ProjectComment_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectComment] CHECK CONSTRAINT [FK_ProjectComment_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectComment_User_ModifiedBy] on table [dbo].[ProjectComment]')
GO

ALTER TABLE [dbo].[ProjectStatus]  WITH CHECK ADD  CONSTRAINT [FK_ProjectStatus_Project_ProjectId] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([_id])
GO

ALTER TABLE [dbo].[ProjectStatus] CHECK CONSTRAINT [FK_ProjectStatus_Project_ProjectId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectStatus_Project_ProjectId] on table [dbo].[ProjectStatus]')
GO

ALTER TABLE [dbo].[ProjectStatus]  WITH CHECK ADD  CONSTRAINT [FK_ProjectStatus_LookupValue_StatusId] FOREIGN KEY([StatusId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[ProjectStatus] CHECK CONSTRAINT [FK_ProjectStatus_LookupValue_StatusId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectStatus_LookupValue_StatusId] on table [dbo].[ProjectStatus]')
GO

ALTER TABLE [dbo].[ProjectStatus]  WITH CHECK ADD  CONSTRAINT [FK_ProjectStatus_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectStatus] CHECK CONSTRAINT [FK_ProjectStatus_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectStatus_User_CreatedBy] on table [dbo].[ProjectStatus]')
GO

ALTER TABLE [dbo].[ProjectStatus]  WITH CHECK ADD  CONSTRAINT [FK_ProjectStatus_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectStatus] CHECK CONSTRAINT [FK_ProjectStatus_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectStatus_User_ModifiedBy] on table [dbo].[ProjectStatus]')
GO

ALTER TABLE [dbo].[ProjectWorkLog]  WITH CHECK ADD  CONSTRAINT [FK_ProjectWorkLog_Project_ProjectId] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([_id])
GO

ALTER TABLE [dbo].[ProjectWorkLog] CHECK CONSTRAINT [FK_ProjectWorkLog_Project_ProjectId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectWorkLog_Project_ProjectId] on table [dbo].[ProjectWorkLog]')
GO

ALTER TABLE [dbo].[ProjectWorkLog]  WITH CHECK ADD  CONSTRAINT [FK_ProjectWorkLog_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectWorkLog] CHECK CONSTRAINT [FK_ProjectWorkLog_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectWorkLog_User_CreatedBy] on table [dbo].[ProjectWorkLog]')
GO

ALTER TABLE [dbo].[ProjectWorkLog]  WITH CHECK ADD  CONSTRAINT [FK_ProjectWorkLog_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[ProjectWorkLog] CHECK CONSTRAINT [FK_ProjectWorkLog_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_ProjectWorkLog_User_ModifiedBy] on table [dbo].[ProjectWorkLog]')
GO

ALTER TABLE [dbo].[Supplier]  WITH CHECK ADD  CONSTRAINT [FK_Supplier_LookupValue_SalutationId] FOREIGN KEY([SalutationId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Supplier] CHECK CONSTRAINT [FK_Supplier_LookupValue_SalutationId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Supplier_LookupValue_SalutationId] on table [dbo].[Supplier]')
GO

ALTER TABLE [dbo].[Supplier]  WITH CHECK ADD  CONSTRAINT [FK_Supplier_LookupValue_IndustryTypeId] FOREIGN KEY([IndustryTypeId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Supplier] CHECK CONSTRAINT [FK_Supplier_LookupValue_IndustryTypeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Supplier_LookupValue_IndustryTypeId] on table [dbo].[Supplier]')
GO

ALTER TABLE [dbo].[Supplier]  WITH CHECK ADD  CONSTRAINT [FK_Supplier_LookupValue_BankId] FOREIGN KEY([BankId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[Supplier] CHECK CONSTRAINT [FK_Supplier_LookupValue_BankId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Supplier_LookupValue_BankId] on table [dbo].[Supplier]')
GO

ALTER TABLE [dbo].[Supplier]  WITH CHECK ADD  CONSTRAINT [FK_Supplier_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Supplier] CHECK CONSTRAINT [FK_Supplier_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Supplier_User_CreatedBy] on table [dbo].[Supplier]')
GO

ALTER TABLE [dbo].[Supplier]  WITH CHECK ADD  CONSTRAINT [FK_Supplier_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Supplier] CHECK CONSTRAINT [FK_Supplier_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Supplier_User_ModifiedBy] on table [dbo].[Supplier]')
GO

ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_Project_ProjectId] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([_id])
GO

ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_Project_ProjectId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Task_Project_ProjectId] on table [dbo].[Task]')
GO

ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_Task_SubTaskId] FOREIGN KEY([SubTaskId])
REFERENCES [dbo].[Task] ([_id])
GO

ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_Task_SubTaskId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Task_Task_SubTaskId] on table [dbo].[Task]')
GO

ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Task_User_CreatedBy] on table [dbo].[Task]')
GO

ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_Task_User_ModifiedBy] on table [dbo].[Task]')
GO

ALTER TABLE [dbo].[TaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignment_Task_TaskId] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([_id])
GO

ALTER TABLE [dbo].[TaskAssignment] CHECK CONSTRAINT [FK_TaskAssignment_Task_TaskId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskAssignment_Task_TaskId] on table [dbo].[TaskAssignment]')
GO

ALTER TABLE [dbo].[TaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignment_Employee_PreviousAssigneeId] FOREIGN KEY([PreviousAssigneeId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[TaskAssignment] CHECK CONSTRAINT [FK_TaskAssignment_Employee_PreviousAssigneeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskAssignment_Employee_PreviousAssigneeId] on table [dbo].[TaskAssignment]')
GO

ALTER TABLE [dbo].[TaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignment_Employee_CurrentAssigneeId] FOREIGN KEY([CurrentAssigneeId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[TaskAssignment] CHECK CONSTRAINT [FK_TaskAssignment_Employee_CurrentAssigneeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskAssignment_Employee_CurrentAssigneeId] on table [dbo].[TaskAssignment]')
GO

ALTER TABLE [dbo].[TaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignment_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskAssignment] CHECK CONSTRAINT [FK_TaskAssignment_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskAssignment_User_CreatedBy] on table [dbo].[TaskAssignment]')
GO

ALTER TABLE [dbo].[TaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignment_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskAssignment] CHECK CONSTRAINT [FK_TaskAssignment_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskAssignment_User_ModifiedBy] on table [dbo].[TaskAssignment]')
GO

ALTER TABLE [dbo].[TaskComment]  WITH CHECK ADD  CONSTRAINT [FK_TaskComment_Task_TaskId] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([_id])
GO

ALTER TABLE [dbo].[TaskComment] CHECK CONSTRAINT [FK_TaskComment_Task_TaskId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskComment_Task_TaskId] on table [dbo].[TaskComment]')
GO

ALTER TABLE [dbo].[TaskComment]  WITH CHECK ADD  CONSTRAINT [FK_TaskComment_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskComment] CHECK CONSTRAINT [FK_TaskComment_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskComment_User_CreatedBy] on table [dbo].[TaskComment]')
GO

ALTER TABLE [dbo].[TaskComment]  WITH CHECK ADD  CONSTRAINT [FK_TaskComment_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskComment] CHECK CONSTRAINT [FK_TaskComment_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskComment_User_ModifiedBy] on table [dbo].[TaskComment]')
GO

ALTER TABLE [dbo].[TaskStatus]  WITH CHECK ADD  CONSTRAINT [FK_TaskStatus_Task_TaskId] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([_id])
GO

ALTER TABLE [dbo].[TaskStatus] CHECK CONSTRAINT [FK_TaskStatus_Task_TaskId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskStatus_Task_TaskId] on table [dbo].[TaskStatus]')
GO

ALTER TABLE [dbo].[TaskStatus]  WITH CHECK ADD  CONSTRAINT [FK_TaskStatus_LookupValue_StatusId] FOREIGN KEY([StatusId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[TaskStatus] CHECK CONSTRAINT [FK_TaskStatus_LookupValue_StatusId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskStatus_LookupValue_StatusId] on table [dbo].[TaskStatus]')
GO

ALTER TABLE [dbo].[TaskStatus]  WITH CHECK ADD  CONSTRAINT [FK_TaskStatus_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskStatus] CHECK CONSTRAINT [FK_TaskStatus_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskStatus_User_CreatedBy] on table [dbo].[TaskStatus]')
GO

ALTER TABLE [dbo].[TaskStatus]  WITH CHECK ADD  CONSTRAINT [FK_TaskStatus_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskStatus] CHECK CONSTRAINT [FK_TaskStatus_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskStatus_User_ModifiedBy] on table [dbo].[TaskStatus]')
GO

ALTER TABLE [dbo].[TaskWorkLog]  WITH CHECK ADD  CONSTRAINT [FK_TaskWorkLog_Task_TaskId] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([_id])
GO

ALTER TABLE [dbo].[TaskWorkLog] CHECK CONSTRAINT [FK_TaskWorkLog_Task_TaskId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskWorkLog_Task_TaskId] on table [dbo].[TaskWorkLog]')
GO

ALTER TABLE [dbo].[TaskWorkLog]  WITH CHECK ADD  CONSTRAINT [FK_TaskWorkLog_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskWorkLog] CHECK CONSTRAINT [FK_TaskWorkLog_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskWorkLog_User_CreatedBy] on table [dbo].[TaskWorkLog]')
GO

ALTER TABLE [dbo].[TaskWorkLog]  WITH CHECK ADD  CONSTRAINT [FK_TaskWorkLog_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[TaskWorkLog] CHECK CONSTRAINT [FK_TaskWorkLog_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_TaskWorkLog_User_ModifiedBy] on table [dbo].[TaskWorkLog]')
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Employee_EmployeeId] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([_id])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Employee_EmployeeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_User_Employee_EmployeeId] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Client_ClientId] FOREIGN KEY([ClientId])
REFERENCES [dbo].[Client] ([_id])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Client_ClientId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_User_Client_ClientId] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_User_User_CreatedBy] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_User_User_ModifiedBy] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Supplier_SupplierId] FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Supplier] ([_id])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Supplier_SupplierId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_User_Supplier_SupplierId] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[UserGroup]  WITH CHECK ADD  CONSTRAINT [FK_UserGroup_User_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserGroup] CHECK CONSTRAINT [FK_UserGroup_User_UserId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroup_User_UserId] on table [dbo].[UserGroup]')
GO

ALTER TABLE [dbo].[UserGroup]  WITH CHECK ADD  CONSTRAINT [FK_UserGroup_LookupValue_GroupId] FOREIGN KEY([GroupId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[UserGroup] CHECK CONSTRAINT [FK_UserGroup_LookupValue_GroupId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroup_LookupValue_GroupId] on table [dbo].[UserGroup]')
GO

ALTER TABLE [dbo].[UserGroup]  WITH CHECK ADD  CONSTRAINT [FK_UserGroup_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserGroup] CHECK CONSTRAINT [FK_UserGroup_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroup_User_CreatedBy] on table [dbo].[UserGroup]')
GO

ALTER TABLE [dbo].[UserGroup]  WITH CHECK ADD  CONSTRAINT [FK_UserGroup_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserGroup] CHECK CONSTRAINT [FK_UserGroup_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroup_User_ModifiedBy] on table [dbo].[UserGroup]')
GO

ALTER TABLE [dbo].[UserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_UserGroupCapacity_UserGroup_UserGroupId] FOREIGN KEY([UserGroupId])
REFERENCES [dbo].[UserGroup] ([_id])
GO

ALTER TABLE [dbo].[UserGroupCapacity] CHECK CONSTRAINT [FK_UserGroupCapacity_UserGroup_UserGroupId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroupCapacity_UserGroup_UserGroupId] on table [dbo].[UserGroupCapacity]')
GO

ALTER TABLE [dbo].[UserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_UserGroupCapacity_LookupValue_CapacityId] FOREIGN KEY([CapacityId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[UserGroupCapacity] CHECK CONSTRAINT [FK_UserGroupCapacity_LookupValue_CapacityId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroupCapacity_LookupValue_CapacityId] on table [dbo].[UserGroupCapacity]')
GO

ALTER TABLE [dbo].[UserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_UserGroupCapacity_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserGroupCapacity] CHECK CONSTRAINT [FK_UserGroupCapacity_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroupCapacity_User_CreatedBy] on table [dbo].[UserGroupCapacity]')
GO

ALTER TABLE [dbo].[UserGroupCapacity]  WITH CHECK ADD  CONSTRAINT [FK_UserGroupCapacity_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserGroupCapacity] CHECK CONSTRAINT [FK_UserGroupCapacity_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserGroupCapacity_User_ModifiedBy] on table [dbo].[UserGroupCapacity]')
GO

ALTER TABLE [dbo].[UserLocks]  WITH CHECK ADD  CONSTRAINT [FK_UserLocks_User_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserLocks] CHECK CONSTRAINT [FK_UserLocks_User_UserId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserLocks_User_UserId] on table [dbo].[UserLocks]')
GO

ALTER TABLE [dbo].[UserLocks]  WITH CHECK ADD  CONSTRAINT [FK_UserLocks_LookupValue_UserLockReasonId] FOREIGN KEY([UserLockReasonId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[UserLocks] CHECK CONSTRAINT [FK_UserLocks_LookupValue_UserLockReasonId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserLocks_LookupValue_UserLockReasonId] on table [dbo].[UserLocks]')
GO

ALTER TABLE [dbo].[UserLocks]  WITH CHECK ADD  CONSTRAINT [FK_UserLocks_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserLocks] CHECK CONSTRAINT [FK_UserLocks_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserLocks_User_CreatedBy] on table [dbo].[UserLocks]')
GO

ALTER TABLE [dbo].[UserLocks]  WITH CHECK ADD  CONSTRAINT [FK_UserLocks_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserLocks] CHECK CONSTRAINT [FK_UserLocks_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserLocks_User_ModifiedBy] on table [dbo].[UserLocks]')
GO

ALTER TABLE [dbo].[UserTransaction]  WITH CHECK ADD  CONSTRAINT [FK_UserTransaction_User_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserTransaction] CHECK CONSTRAINT [FK_UserTransaction_User_UserId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserTransaction_User_UserId] on table [dbo].[UserTransaction]')
GO

ALTER TABLE [dbo].[UserTransaction]  WITH CHECK ADD  CONSTRAINT [FK_UserTransaction_LookupValue_TransactionTypeId] FOREIGN KEY([TransactionTypeId])
REFERENCES [dbo].[LookupValue] ([_id])
GO

ALTER TABLE [dbo].[UserTransaction] CHECK CONSTRAINT [FK_UserTransaction_LookupValue_TransactionTypeId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserTransaction_LookupValue_TransactionTypeId] on table [dbo].[UserTransaction]')
GO

ALTER TABLE [dbo].[UserTransaction]  WITH CHECK ADD  CONSTRAINT [FK_UserTransaction_Entity_EntityId] FOREIGN KEY([EntityId])
REFERENCES [dbo].[Entity] ([_id])
GO

ALTER TABLE [dbo].[UserTransaction] CHECK CONSTRAINT [FK_UserTransaction_Entity_EntityId]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserTransaction_Entity_EntityId] on table [dbo].[UserTransaction]')
GO

ALTER TABLE [dbo].[UserTransaction]  WITH CHECK ADD  CONSTRAINT [FK_UserTransaction_User_CreatedBy] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserTransaction] CHECK CONSTRAINT [FK_UserTransaction_User_CreatedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserTransaction_User_CreatedBy] on table [dbo].[UserTransaction]')
GO

ALTER TABLE [dbo].[UserTransaction]  WITH CHECK ADD  CONSTRAINT [FK_UserTransaction_User_ModifiedBy] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[User] ([_id])
GO

ALTER TABLE [dbo].[UserTransaction] CHECK CONSTRAINT [FK_UserTransaction_User_ModifiedBy]
GO
PRINT ('>> Completed > Creating FOREIGN KEY constraint [FK_UserTransaction_User_ModifiedBy] on table [dbo].[UserTransaction]')
GO

PRINT ('>> Completed > Creating all FOREIGN KEY constraints')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Creating all DEFAULT constraints
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

ALTER TABLE [dbo].[Client] ADD  CONSTRAINT [DF_Client_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_Client_DateCreated] on table [dbo].[Client]')
GO

ALTER TABLE [dbo].[ContactDetail] ADD  CONSTRAINT [DF_ContactDetail_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_ContactDetail_DateCreated] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[Department] ADD  CONSTRAINT [DF_Department_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_Department_DateCreated] on table [dbo].[Department]')
GO

ALTER TABLE [dbo].[Employee] ADD  CONSTRAINT [DF_Employee_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_Employee_DateCreated] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[EmployeeSalary] ADD  CONSTRAINT [DF_EmployeeSalary_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_EmployeeSalary_DateCreated] on table [dbo].[EmployeeSalary]')
GO

ALTER TABLE [dbo].[Entity] ADD  CONSTRAINT [DF_Entity_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_Entity_DateCreated] on table [dbo].[Entity]')
GO

ALTER TABLE [dbo].[EntityRelationship] ADD  CONSTRAINT [DF_EntityRelationship_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_EntityRelationship_DateCreated] on table [dbo].[EntityRelationship]')
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity] ADD  CONSTRAINT [DF_EntityUserGroupCapacity_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_EntityUserGroupCapacity_DateCreated] on table [dbo].[EntityUserGroupCapacity]')
GO

ALTER TABLE [dbo].[LookupCategory] ADD  CONSTRAINT [DF_LookupCategory_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_LookupCategory_DateCreated] on table [dbo].[LookupCategory]')
GO

ALTER TABLE [dbo].[LookupValue] ADD  CONSTRAINT [DF_LookupValue_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_LookupValue_DateCreated] on table [dbo].[LookupValue]')
GO

ALTER TABLE [dbo].[MenuItem] ADD  CONSTRAINT [DF_MenuItem_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_MenuItem_DateCreated] on table [dbo].[MenuItem]')
GO

ALTER TABLE [dbo].[MenuItemUser] ADD  CONSTRAINT [DF_MenuItemUser_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_MenuItemUser_DateCreated] on table [dbo].[MenuItemUser]')
GO

ALTER TABLE [dbo].[GroupMenuItem] ADD  CONSTRAINT [DF_GroupMenuItem_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_GroupMenuItem_DateCreated] on table [dbo].[GroupMenuItem]')
GO

ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_Project_DateCreated] on table [dbo].[Project]')
GO

ALTER TABLE [dbo].[ProjectAssignment] ADD  CONSTRAINT [DF_ProjectAssignment_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectAssignment_DateCreated] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectComment] ADD  CONSTRAINT [DF_ProjectComment_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectComment_DateCreated] on table [dbo].[ProjectComment]')
GO

ALTER TABLE [dbo].[ProjectStatus] ADD  CONSTRAINT [DF_ProjectStatus_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectStatus_DateCreated] on table [dbo].[ProjectStatus]')
GO

ALTER TABLE [dbo].[ProjectWorkLog] ADD  CONSTRAINT [DF_ProjectWorkLog_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectWorkLog_DateCreated] on table [dbo].[ProjectWorkLog]')
GO

ALTER TABLE [dbo].[Task] ADD  CONSTRAINT [DF_Task_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_Task_DateCreated] on table [dbo].[Task]')
GO

ALTER TABLE [dbo].[TaskAssignment] ADD  CONSTRAINT [DF_TaskAssignment_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskAssignment_DateCreated] on table [dbo].[TaskAssignment]')
GO

ALTER TABLE [dbo].[TaskComment] ADD  CONSTRAINT [DF_TaskComment_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskComment_DateCreated] on table [dbo].[TaskComment]')
GO

ALTER TABLE [dbo].[TaskStatus] ADD  CONSTRAINT [DF_TaskStatus_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskStatus_DateCreated] on table [dbo].[TaskStatus]')
GO

ALTER TABLE [dbo].[TaskWorkLog] ADD  CONSTRAINT [DF_TaskWorkLog_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskWorkLog_DateCreated] on table [dbo].[TaskWorkLog]')
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_IsAdmin]  DEFAULT (0) FOR [IsAdmin]
GO
PRINT ('>> Completed > Adding default constraint [DF_User_IsAdmin] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_IsActive]  DEFAULT (0) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_User_IsActive] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_User_DateCreated] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[UserGroup] ADD  CONSTRAINT [DF_UserGroup_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserGroup_DateCreated] on table [dbo].[UserGroup]')
GO

ALTER TABLE [dbo].[UserGroupCapacity] ADD  CONSTRAINT [DF_UserGroupCapacity_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserGroupCapacity_DateCreated] on table [dbo].[UserGroupCapacity]')
GO

ALTER TABLE [dbo].[UserLocks] ADD  CONSTRAINT [DF_UserLocks_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserLocks_DateCreated] on table [dbo].[UserLocks]')
GO

ALTER TABLE [dbo].[UserTransaction] ADD  CONSTRAINT [DF_UserTransaction_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserTransaction_DateCreated] on table [dbo].[UserTransaction]')
GO

ALTER TABLE [dbo].[Supplier] ADD  CONSTRAINT [DF_Supplier_DateCreated]  DEFAULT (getdate()) FOR [DateCreated]
GO
PRINT ('>> Completed > Adding default constraint [DF_Supplier_DateCreated] on table [dbo].[Supplier]')
GO

ALTER TABLE [dbo].[Client] ADD  CONSTRAINT [DF_Client_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_Client_IsActive] on table [dbo].[Client]')
GO

ALTER TABLE [dbo].[ContactDetail] ADD  CONSTRAINT [DF_ContactDetail_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_ContactDetail_IsActive] on table [dbo].[ContactDetail]')
GO

ALTER TABLE [dbo].[Department] ADD  CONSTRAINT [DF_Department_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_Department_IsActive] on table [dbo].[Department]')
GO

ALTER TABLE [dbo].[Employee] ADD  CONSTRAINT [DF_Employee_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_Employee_IsActive] on table [dbo].[Employee]')
GO

ALTER TABLE [dbo].[EmployeeSalary] ADD  CONSTRAINT [DF_EmployeeSalary_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_EmployeeSalary_IsActive] on table [dbo].[EmployeeSalary]')
GO

ALTER TABLE [dbo].[Entity] ADD  CONSTRAINT [DF_Entity_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_Entity_IsActive] on table [dbo].[Entity]')
GO

ALTER TABLE [dbo].[EntityRelationship] ADD  CONSTRAINT [DF_EntityRelationship_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_EntityRelationship_IsActive] on table [dbo].[EntityRelationship]')
GO

ALTER TABLE [dbo].[EntityUserGroupCapacity] ADD  CONSTRAINT [DF_EntityUserGroupCapacity_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_EntityUserGroupCapacity_IsActive] on table [dbo].[EntityUserGroupCapacity]')
GO

ALTER TABLE [dbo].[LookupCategory] ADD  CONSTRAINT [DF_LookupCategory_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_LookupCategory_IsActive] on table [dbo].[LookupCategory]')
GO

ALTER TABLE [dbo].[LookupValue] ADD  CONSTRAINT [DF_LookupValue_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_LookupValue_IsActive] on table [dbo].[LookupValue]')
GO

ALTER TABLE [dbo].[MenuItem] ADD  CONSTRAINT [DF_MenuItem_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_MenuItem_IsActive] on table [dbo].[MenuItem]')
GO

ALTER TABLE [dbo].[MenuItemUser] ADD  CONSTRAINT [DF_MenuItemUser_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_MenuItemUser_IsActive] on table [dbo].[MenuItemUser]')
GO

ALTER TABLE [dbo].[GroupMenuItem] ADD  CONSTRAINT [DF_GroupMenuItem_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_GroupMenuItem_IsActive] on table [dbo].[GroupMenuItem]')
GO

ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_Project_IsActive] on table [dbo].[Project]')
GO

ALTER TABLE [dbo].[ProjectAssignment] ADD  CONSTRAINT [DF_ProjectAssignment_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectAssignment_IsActive] on table [dbo].[ProjectAssignment]')
GO

ALTER TABLE [dbo].[ProjectComment] ADD  CONSTRAINT [DF_ProjectComment_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectComment_IsActive] on table [dbo].[ProjectComment]')
GO

ALTER TABLE [dbo].[ProjectStatus] ADD  CONSTRAINT [DF_ProjectStatus_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectStatus_IsActive] on table [dbo].[ProjectStatus]')
GO

ALTER TABLE [dbo].[ProjectWorkLog] ADD  CONSTRAINT [DF_ProjectWorkLog_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_ProjectWorkLog_IsActive] on table [dbo].[ProjectWorkLog]')
GO

ALTER TABLE [dbo].[Task] ADD  CONSTRAINT [DF_Task_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_Task_IsActive] on table [dbo].[Task]')
GO

ALTER TABLE [dbo].[TaskAssignment] ADD  CONSTRAINT [DF_TaskAssignment_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskAssignment_IsActive] on table [dbo].[TaskAssignment]')
GO

ALTER TABLE [dbo].[TaskComment] ADD  CONSTRAINT [DF_TaskComment_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskComment_IsActive] on table [dbo].[TaskComment]')
GO

ALTER TABLE [dbo].[TaskStatus] ADD  CONSTRAINT [DF_TaskStatus_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskStatus_IsActive] on table [dbo].[TaskStatus]')
GO

ALTER TABLE [dbo].[TaskWorkLog] ADD  CONSTRAINT [DF_TaskWorkLog_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_TaskWorkLog_IsActive] on table [dbo].[TaskWorkLog]')
GO

ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_IsLocked]  DEFAULT (1) FOR [IsLocked]
GO
PRINT ('>> Completed > Adding default constraint [DF_User_IsLocked] on table [dbo].[User]')
GO

ALTER TABLE [dbo].[UserGroup] ADD  CONSTRAINT [DF_UserGroup_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserGroup_IsActive] on table [dbo].[UserGroup]')
GO

ALTER TABLE [dbo].[UserGroupCapacity] ADD  CONSTRAINT [DF_UserGroupCapacity_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserGroupCapacity_IsActive] on table [dbo].[UserGroupCapacity]')
GO

ALTER TABLE [dbo].[UserLocks] ADD  CONSTRAINT [DF_UserLocks_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserLocks_IsActive] on table [dbo].[UserLocks]')
GO

ALTER TABLE [dbo].[UserTransaction] ADD  CONSTRAINT [DF_UserTransaction_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_UserTransaction_IsActive] on table [dbo].[UserTransaction]')
GO

ALTER TABLE [dbo].[Supplier] ADD  CONSTRAINT [DF_Supplier_IsActive] DEFAULT (1) FOR [IsActive]
GO
PRINT ('>> Completed > Adding default constraint [DF_Supplier_IsActive] on table [dbo].[Supplier]')
GO

PRINT ('>> Completed > Creating all DEFAULT constraints')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Create user functions
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GenerateEmployeeNumber]
-- Description:	Generates a unique employee number for specified parameters
-- Parameters:
-- @PositionId
-- @EmploymentTypeId
-- =============================================
CREATE FUNCTION [dbo].[GenerateEmployeeNumber](@PositionId BIGINT, @EmploymentTypeId BIGINT)
RETURNS NVARCHAR(MAX)
AS
BEGIN
	DECLARE @Position NVARCHAR(1) = (SELECT UPPER(LEFT([lv].[Value], 1)) FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] WHERE [lv].[_id] = @PositionId);
	DECLARE @EmploymentType NVARCHAR(1) = (SELECT UPPER(LEFT([lv].[Value], 1)) FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] WHERE [lv].[_id] = @EmploymentTypeId);
	DECLARE @EmployeeNumber NVARCHAR(10) = CONCAT(@Position, @EmploymentType, (SELECT [REN] FROM [dbo.[vwRandomEmployeeNumber]));

	WHILE((SELECT COUNT([_id]) FROM [dbo].[Employee] WHERE [EmployeeNumber] LIKE '%' + @EmployeeNumber + '%') <> 0)
	BEGIN
		SET @EmployeeNumber = CONCAT(@Position, @EmploymentType, (SELECT [REN] FROM [dbo.[vwRandomEmployeeNumber]));
	END

    RETURN LTRIM(RTRIM(@EmployeeNumber))
END
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetSAIdNumberBirthDate]
-- Description:	Gets the birth date from the specified SA Id Number
-- Parameters:
-- @SAIdNumber
-- =============================================
CREATE FUNCTION [dbo].[GetSAIdNumberBirthDate](@SAIdNumber BIGINT)
RETURNS DATE
AS
BEGIN
	DECLARE @DoB DATE
	IF(@SAIdNumber IS NOT NULL AND LEN(@SAIdNumber) = 13)
	BEGIN
		DECLARE @Year BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 1, 2) AS INT);
		DECLARE @Month BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 3, 2) AS INT);
		DECLARE @Day BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 5, 2) AS INT);
		SET @DoB = (SELECT CAST(CAST((@Year * 10000) + (@Month * 100) + @Day AS VARCHAR(255)) AS DATE))
	END
    RETURN @DoB
END
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[SplitCamelCase]
-- Description:	Splits a camel case value
-- Parameters:
-- @Value
-- =============================================
CREATE FUNCTION [dbo].[SplitCamelCase](@Value NVARCHAR(MAX))
RETURNS NVARCHAR(MAX)
AS
BEGIN
    DECLARE @KeepValues AS NVARCHAR(50)
    SET @KeepValues = '%[^ ][a-z][A-Z][0-9]%'
    WHILE (PATINDEX(@KeepValues COLLATE Latin1_General_Bin, @Value) > 0)
	BEGIN
        SET @Value = STUFF(@Value, PATINDEX(@KeepValues COLLATE Latin1_General_Bin, @Value) + 1, 0, ' ')
	END
    RETURN LTRIM(RTRIM(@Value))
END
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetFirstCharacters]
-- Description:	Gets and Returns all the first characters from the specified parameter
-- Parameters:
-- @Value
-- =============================================
CREATE FUNCTION [dbo].[GetFirstCharacters](@Value NVARCHAR(MAX))
RETURNS NVARCHAR(MAX)
AS
BEGIN
	DECLARE @ValueAsXml XML = CAST('<d>' + REPLACE(@Value, ' ', '</d><d>') + '</d>' AS XML)
	DECLARE @Result NVARCHAR(MAX) = ''
	SELECT
		@Result = @Result + left(T.split.value('.', 'NVARCHAR(MAX)'), 1)
	FROM    @ValueAsXml.nodes('/d') T ( split )
    RETURN LTRIM(RTRIM(@Result))
END
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetAllUsers]
-- Description:	Fetches the User(s) details
-- Parameters:
-- =============================================
CREATE FUNCTION [dbo].[GetAllUsers]
( )
RETURNS TABLE 
AS
RETURN 
(
	WITH [cte] ([_id], [EmployeeClientSupplierId], [UserTypeId], [EmailAddress], [Password], [IsAdmin], [IsActive], [IsLocked], [DateLastLoggedIn], [CreatedBy], [DateCreated], [ModifiedBy], [DateModified]) AS (
	SELECT
		[_id]
		, COALESCE([EmployeeId], [ClientId], [SupplierId], [_id]) AS [EmployeeClientSupplierId]
		, CASE
			WHEN [EmailAddress] = 'root@genio.idas.co.za' THEN 'Root'
			WHEN [EmailAddress] = 'admin@genio.idas.co.za' THEN 'Admin'
			WHEN [EmployeeId] IS NOT NULL THEN 'Employee'
			WHEN [ClientId] IS NOT NULL THEN 'Client'
			WHEN [SupplierId] IS NOT NULL THEN 'Supplier'
			ELSE 'General' END AS [UserTypeId]
		, [EmailAddress]
		, [Password]
		, [IsAdmin]
		, [IsActive]
		, [IsLocked]
		, [DateLastLoggedIn]
		, [CreatedBy]
		, [DateCreated]
		, [ModifiedBy]
		, [DateModified]
	FROM [IdasGenioDb].[dbo].[User]
	)
	SELECT
		[_id] AS [UserId]
		, [EmployeeClientSupplierId]
		, (SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'UserType' AND [lv].[Value] = [cte].[UserTypeId]) AS [UserTypeId]
		, [EmailAddress]
		, [Password]
		, [IsAdmin]
		, [IsActive]
		, [IsLocked]
		, [DateLastLoggedIn]
		, [CreatedBy]
		, [DateCreated]
		, [ModifiedBy]
		, [DateModified]
	FROM [cte]
)
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetUserBy]
-- Description:	Fetches the User details using the specified filter option(s)
-- Parameters:
-- * @UserId
-- * @EmailAddress
-- * @EmployeeClientSupplierId
-- * @UserTypeId
-- =============================================
CREATE FUNCTION [dbo].[GetUserBy]
(
	@UserId INT = NULL,
	@EmailAddress NVARCHAR(320) = NULL,
	@EmployeeClientSupplierId INT = NULL,
	@UserTypeId INT = NULL
)
RETURNS TABLE 
AS
RETURN 
(
	SELECT
		[UserId]
		, [EmployeeClientSupplierId]
		, [UserTypeId]
		, [EmailAddress]
		, [DateLastLoggedIn]
		, [IsLocked]
	FROM [IdasGenioDb].[dbo].[GetAllUsers]()
	WHERE
		(@UserId IS NULL OR [UserId] = @UserId)
		AND (@EmailAddress IS NULL OR [EmailAddress] = @EmailAddress)
		AND (@EmployeeClientSupplierId IS NULL OR [EmployeeClientSupplierId] = @EmployeeClientSupplierId)
		AND (@UserTypeId IS NULL OR [UserTypeId] = @UserTypeId)
)
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetUserGroupsByEmailAddress]
-- Description:	Fetches the User Group(s) for the specified @EmailAddress
-- Parameters:
--	@EmailAddress
-- =============================================
CREATE FUNCTION [dbo].[GetUserGroupsByEmailAddress]
(	
	@EmailAddress [nvarchar](320)
)
RETURNS TABLE 
AS
RETURN 
(
	SELECT DISTINCT
		[lv].[Value] AS [GroupName]
	FROM [IdasGenioDb].[dbo].[User] AS [u]
	JOIN [IdasGenioDb].[dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [IdasGenioDb].[dbo].[LookupValue] AS [lv] ON [ug].[GroupId] = [lv].[_id]
	WHERE
		[u].[EmailAddress] = @EmailAddress
)
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetUserGroupsByUserId]
-- Description:	Fetches the User Group(s) for the specified @UserId
-- Parameters:
--	@UserId
-- =============================================
CREATE FUNCTION [dbo].[GetUserGroupsByUserId]
(	
	@UserId [bigint]
)
RETURNS TABLE 
AS
RETURN 
(
	SELECT DISTINCT
		[lv].[Value] AS [GroupName]
	FROM [IdasGenioDb].[dbo].[User] AS [u]
	JOIN [IdasGenioDb].[dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [IdasGenioDb].[dbo].[LookupValue] AS [lv] ON [ug].[GroupId] = [lv].[_id]
	WHERE
		[u].[_id] = @UserId
)
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetUserGroupMenuItemsByEmailAddress]
-- Description:	Fetches the User Group(s) for the specified @EmailAddress
-- Parameters:
--	@EmailAddress
-- =============================================
CREATE FUNCTION [dbo].[GetUserGroupMenuItemsByEmailAddress]
(	
	@EmailAddress [nvarchar](320)
)
RETURNS TABLE 
AS
RETURN 
(
	SELECT DISTINCT
		[mi].[Path]
		,[mi].[Title]
		,[mi].[Icon]
		,[mi].[Class]
	FROM [IdasGenioDb].[dbo].[User] AS [u]
	JOIN [IdasGenioDb].[dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [IdasGenioDb].[dbo].[GroupMenuItem] AS [gmi] ON [ug].[GroupId] = [gmi].[GroupId]
	JOIN [IdasGenioDb].[dbo].[LookupValue] AS [lv] ON [gmi].[GroupId] = [lv].[_id]
	JOIN [IdasGenioDb].[dbo].[MenuItem] AS [mi] ON [gmi].[MenuItemId] = [mi].[_id]
	WHERE
		[u].[EmailAddress] = @EmailAddress
)
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetUserGroupMenuItemsByUserId]
-- Description:	Fetches the User Group(s) for the specified @UserId
-- Parameters:
--	@UserId
-- =============================================
CREATE FUNCTION [dbo].[GetUserGroupMenuItemsByUserId]
(	
	@UserId [bigint]
)
RETURNS TABLE 
AS
RETURN 
(
	SELECT DISTINCT
		[mi].[Path]
		,[mi].[Title]
		,[mi].[Icon]
		,[mi].[Class]
	FROM [IdasGenioDb].[dbo].[User] AS [u]
	JOIN [IdasGenioDb].[dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [IdasGenioDb].[dbo].[GroupMenuItem] AS [gmi] ON [ug].[GroupId] = [gmi].[GroupId]
	JOIN [IdasGenioDb].[dbo].[LookupValue] AS [lv] ON [gmi].[GroupId] = [lv].[_id]
	JOIN [IdasGenioDb].[dbo].[MenuItem] AS [mi] ON [gmi].[MenuItemId] = [mi].[_id]
	WHERE
		[u].[_id] = @UserId
)
GO

PRINT ('>> Completed > Create user functions')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Create store procedures
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

PRINT ('>> Completed > Create store procedures')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Creating/Adding default data
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
PRINT ('>> Started > INSERT > Default Data Setup')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Root (Super) and Admin user ([dbo].[User])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

-- Setup Root (Super) User
INSERT INTO [dbo].[User]([EmailAddress], [Password], [IsAdmin], [IsLocked], [IsActive], [DateLastLoggedIn], [CreatedBy]) VALUES ('root@genio.idas.co.za', 'root@123', 1, 0, 1, GETDATE(), 1);
-- Setup Admin User
INSERT INTO [dbo].[User]([EmailAddress], [Password], [IsAdmin], [IsLocked], [IsActive], [DateLastLoggedIn], [CreatedBy]) VALUES ('admin@genio.idas.co.za', 'admin@123', 1, 0, 1, GETDATE(), 1);

PRINT ('>> Completed > INSERT > Default > Default System User(s) into [dbo].[User]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Entities ([dbo].[Entity])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO [dbo].[Entity]([Name], [Description], [CreatedBy])
SELECT
	[name] AS [Name],
	[name] AS [Description],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [IdasGenioDb].[sys].[tables] AS [t]

PRINT ('>> Completed > INSERT > Default > [dbo].[Entity] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Entity Relationship(s) ([dbo].[EntityRelationShip])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO [dbo].[EntityRelationship]([ParentEntityId], [ParentEntityColumnName], [ChildEntityId], [ChildEntityColumnName], [RelationshipName], [CreatedBy])
SELECT
	[ept].[_id] AS [ParentEntityId],
	[ptfc].[name] AS [ParentEntityColumnName],
	[ect].[_id] AS [ChildEntityId],
	[ctfc].[name] AS [ChildEntityColumnName],
	[fk].[name] AS [RelationshipName],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [IdasGenioDb].[sys].[foreign_keys] AS [fk]	-- All Foreign Key Constraints
JOIN [IdasGenioDb].[sys].[foreign_key_columns] AS [fkc] ON [fk].[object_id] = [fkc].[constraint_object_id]	-- All Foreign Key Constraint Columns
JOIN [IdasGenioDb].[sys].[tables] AS [pt] ON [fkc].[referenced_object_id] = [pt].[object_id]	-- Parent/Referenced Table
JOIN [IdasGenioDb].[dbo].[Entity] AS [ept] ON [pt].[name] = [ept].[Name]						-- Parent Entity
JOIN [IdasGenioDb].[sys].[all_columns] AS [ptfc] ON [pt].[object_id] = [ptfc].[object_id] AND [fkc].[referenced_column_id] = [ptfc].[column_id]	-- Parent/Referenced Table Column
JOIN [IdasGenioDb].[sys].[tables] AS [ct] ON [fkc].[parent_object_id] = [ct].[object_id]	-- Child Table
JOIN [IdasGenioDb].[dbo].[Entity] AS [ect] ON [ct].[name] = [ect].[Name]					-- Child Entity
JOIN [IdasGenioDb].[sys].[all_columns] AS [ctfc] ON [ct].[object_id] = [ctfc].[object_id] AND [fkc].[parent_column_id] = [ctfc].[column_id]		-- Child Table Column

PRINT ('>> Completed > INSERT > Default > [dbo].[EntityRelationship] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Lookup Categories ([dbo].[LookupCategory])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([Code], [Name], [Description]) AS (
SELECT DISTINCT
	CASE
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'BudgetCode' THEN 'BGC'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Capacity' THEN 'CPCT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Department' THEN 'DPT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'EmploymentType' THEN 'EMPT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Gender' THEN 'GND'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Group' THEN 'GRP'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'IndustryType' THEN 'INDT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'ProjectAssignmentType' THEN 'PJAT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Salutation' THEN 'SLTN'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Position' THEN 'POS'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'PreferredLanguage' THEN 'PRFLNG'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Province' THEN 'PVNC'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Status' THEN 'STS'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'TransactionType' THEN 'TTY'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'UserLockReason' THEN 'ULR'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'WageType' THEN 'WGT'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'Bank' THEN 'BNK'
		WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = 'EmployeePosition' THEN 'EMPS'
	ELSE 'NOCAT' END AS [Code],
	LEFT([ctfc].[name], LEN([ctfc].[name]) - 2) AS [Name],
	LEFT([ctfc].[name], LEN([ctfc].[name]) - 2) AS [Description]
FROM [IdasGenioDb].[sys].[foreign_keys] AS [fk]	-- All Foreign Key Constraints
JOIN [IdasGenioDb].[sys].[foreign_key_columns] AS [fkc] ON [fk].[object_id] = [fkc].[constraint_object_id]	-- All Foreign Key Constraint Columns
JOIN [IdasGenioDb].[sys].[tables] AS [pt] ON [fkc].[referenced_object_id] = [pt].[object_id]	-- Parent/Referenced Table
JOIN [IdasGenioDb].[dbo].[Entity] AS [ept] ON [pt].[name] = [ept].[Name]						-- Parent Entity
JOIN [IdasGenioDb].[sys].[all_columns] AS [ptfc] ON [pt].[object_id] = [ptfc].[object_id] AND [fkc].[referenced_column_id] = [ptfc].[column_id]	-- Parent/Referenced Table Column
JOIN [IdasGenioDb].[sys].[tables] AS [ct] ON [fkc].[parent_object_id] = [ct].[object_id]	-- Child Table
JOIN [IdasGenioDb].[dbo].[Entity] AS [ect] ON [ct].[name] = [ect].[Name]					-- Child Entity
JOIN [IdasGenioDb].[sys].[all_columns] AS [ctfc] ON [ct].[object_id] = [ctfc].[object_id] AND [fkc].[parent_column_id] = [ctfc].[column_id]		-- Child Table Column
WHERE
	[pt].[name] = 'LookupValue'
UNION
SELECT 'UT' AS [Code], 'UserType' AS [Name], 'UserType' AS [Description]
)
INSERT INTO [dbo].[LookupCategory]([Code], [Name], [Description], [CreatedBy])
SELECT DISTINCT
	[Code]
	, [Name]
	, [Description]
	, (SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT > Default > [dbo].[LookupCategory] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Lookup Values ([dbo].[LookupValue])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([LookupCategory], [Value], [Image], [Icon]) AS
(
SELECT 'Bank' AS [LookupCategory], 'Absa Bank Ltd' AS [Value], './assets/img/banks/icon/absa-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'African Bank Ltd' AS [Value], './assets/img/banks/icon/african-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Albaraka Bank Limited' AS [Value], './assets/img/banks/icon/albaraka-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'BoE Private Clients' AS [Value], './assets/img/banks/icon/boe-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Bidvest Bank Limited' AS [Value], './assets/img/banks/icon/bidvest-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Capitec Bank Ltd' AS [Value], './assets/img/banks/icon/capitec-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'FirstRand Bank Ltd' AS [Value], './assets/img/banks/icon/fnb-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Grindrod Bank' AS [Value], './assets/img/banks/icon/grindrod-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Habib Overseas Bank Limited' AS [Value], './assets/img/banks/icon/habib-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'HBZ Bank Limited' AS [Value], './assets/img/banks/icon/hbz-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Investec Bank Ltd' AS [Value], './assets/img/banks/icon/investec-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Mercantile Bank Limited' AS [Value], './assets/img/banks/icon/mercantile-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Nedbank Group Limited' AS [Value], './assets/img/banks/icon/ned-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Rand Merchant Bank' AS [Value], './assets/img/banks/icon/rand-merchant-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'RMB Private Bank' AS [Value], './assets/img/banks/icon/rmb-private-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'South African Bank of Athens Limited' AS [Value], './assets/img/banks/icon/south-african-bank-of-athens-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Sasfin Bank Ltd' AS [Value], './assets/img/banks/icon/sasfin-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Standard Bank of SA Ltd' AS [Value], './assets/img/banks/icon/standard-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Wesbank' AS [Value], './assets/img/banks/icon/wes-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Discovery Bank Ltd' AS [Value], './assets/img/banks/icon/discovery-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'Bank' AS [LookupCategory], 'Standard Chartered Bank Ltd' AS [Value], './assets/img/banks/icon/standard-chartered-bank.png' AS [Image], NULL AS [Icon] UNION
SELECT 'BudgetCode' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Capacity' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Human Resources' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Finance' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Sales' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Marketing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Legal' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Research and Development' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'IT Support' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'General Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Transportation' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Business Development' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Customer Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Management' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Administration' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Manufacturing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Operations' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Communications' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Procurement' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Learning, Training and Development' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Health and Safety' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Permanent' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Part-Time' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Temporary' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Seasonal' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Indipendent Contractor' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Freelancer' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Consultant' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Gender' AS [LookupCategory], 'Female' AS [Value],NULL AS [Image], 'female' AS [Icon] UNION
SELECT 'Gender' AS [LookupCategory], 'Male' AS [Value],NULL AS [Image], 'male' AS [Icon] UNION
SELECT 'Gender' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], 'person' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Administrators' AS [Value],NULL AS [Image], 'supervisor_account' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Clients' AS [Value],NULL AS [Image], 'stream' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Employees' AS [Value],NULL AS [Image], 'groups' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'General' AS [Value],NULL AS [Image], 'person' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Suppliers' AS [Value],NULL AS [Image], 'reduce_capacity' AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Abortion Policy/Anti-Abortion' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Abortion Policy/Pro-Abortion Rights' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Accountants' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Advertising/Public Relations' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Aerospace, Defense Contractors' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agribusiness' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agricultural Services & Products' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agriculture' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Air Transport' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Air Transport Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Airlines' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Alcoholic Beverages' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Alternative Energy Production & Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Architectural Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Attorneys/Law Firms' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Dealers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Dealers, Japanese' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Manufacturers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Automotive' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banking, Mortgage' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banks, Commercial' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banks, Savings & Loans' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Bars & Restaurants' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Beer, Wine & Liquor' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Books, Magazines & Newspapers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Broadcasters, Radio/TV' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Builders/General Contractors' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Builders/Residential' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Building Materials & Equipment' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Building Trade Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Business Associations' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Business Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cable & Satellite TV Production & Distribution' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees, Democratic' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees, Republican' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Dealers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Dealers, Imports' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Manufacturers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Casinos / Gambling' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cattle Ranchers/Livestock' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Chemical & Related Manufacturing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Chiropractors' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Civil Servants/Public Officials' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Clergy & Religious Organizations' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Clothing Manufacturing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Coal Mining' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Colleges, Universities & Schools' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Commercial Banks' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Commercial TV & Radio Stations' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Communications/Electronics' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Computer Software' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Conservative/Republican' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Credit Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Crop Production & Basic Processing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cruise Lines' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cruise Ships & Lines' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Dairy' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense Aerospace' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense Electronics' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense/Foreign Policy Advocates' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic Candidate Committees' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic Leadership PACs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic/Liberal' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Dentists' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Doctors & Other Health Professionals' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Drug Manufacturers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Education' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electric Utilities' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electronics Manufacturing & Equipment' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electronics, Defense Contractors' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Energy & Natural Resources' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Entertainment Industry' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Environment' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Farm Bureaus' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Farming' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Finance / Credit Companies' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Finance, Insurance & Real Estate' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food & Beverage' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Processing & Sales' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Products Manufacturing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Stores' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'For-profit Education' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'For-profit Prisons' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Foreign & Defense Policy' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Forestry & Forest Products' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Foundations, Philanthropists & Non-Profits' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Funeral Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gambling & Casinos' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gambling, Indian Casinos' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Garbage Collection/Waste Management' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gas & Oil' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'General Contractors' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Government Employee Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Government Employees' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gun Control' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gun Rights' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health Professionals' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health Services/HMOs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hedge Funds' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'HMOs & Health Care Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Home Builders' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hospitals & Nursing Homes' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hotels, Motels & Tourism' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Human Rights' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Ideological/Single-Issue' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Indian Gaming' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Industrial Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Insurance' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Internet' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Israel Policy' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Labor' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lawyers & Lobbyists' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lawyers / Law Firms' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Leadership PACs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'LGBTQIA Rights & Issues' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Liberal/Democratic' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Liquor, Wine & Beer' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Livestock' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lobbyists' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lodging / Tourism' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Logging, Timber & Paper Mills' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Manufacturing, Misc' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marijuana' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marijuana' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marine Transport' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Meat processing & products' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Medical Supplies' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Mining' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Business' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Finance' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Manufacturing & Distributing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Miscellaneous Defense' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Miscellaneous Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Mortgage Bankers & Brokers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Motion Picture Production & Distribution' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Music Production' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Natural Gas Pipelines' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Newspaper, Magazine & Book Publishing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Non-profits, Foundations & Philanthropists' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nurses' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nursing Homes/Hospitals' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nutritional & Dietary Supplements' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Oil & Gas' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Payday Lenders' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pharmaceutical Manufacturing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pharmaceuticals / Health Products' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Phone Companies' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Physicians & Other Health Professionals' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Postal Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Poultry & Eggs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Power Utilities' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Printing & Publishing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Private Equity & Investment Firms' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pro-Israel' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Professional Sports, Sports Arenas & Related Equipment & Services' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Progressive/Democratic' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Public Employees' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Public Sector Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Publishing & Printing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Radio/TV Stations' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Railroads' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Real Estate' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Record Companies/Singers' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Recorded Music & Music Production' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Recreation / Live Entertainment' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Religious Organizations/Clergy' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican Candidate Committees' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican Leadership PACs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican/Conservative' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Residential Construction' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Restaurants & Drinking Establishments' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Retail Sales' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Retired' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Savings & Loans' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Schools/Education' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sea Transport' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Securities & Investment' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Special Trade Contractors' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sports, Professional' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Steel Production' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Stock Brokers/Investment Industry' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Student Loan Companies' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sugar Cane & Sugar Beets' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Teachers Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Teachers/Education' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Telecom Services & Equipment' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Telephone Utilities' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Textiles' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Timber, Logging & Paper Mills' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Tobacco' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Transportation' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Transportation Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Trash Collection/Waste Management' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Trucking' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'TV / Movies / Music' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'TV Production' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Airline' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Building Trades' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Industrial' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Misc' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Public Sector' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Teacher' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Transportation' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Universities, Colleges & Schools' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Vegetables & Fruits' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Venture Capital' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Waste Management' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Wine, Beer & Liquor' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Womens Issues' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'CEO' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Managing Director' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'General Manager' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Secretary' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Clerk' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Engineer' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Senior Engineer' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'CFO' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Personal Assistant' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'Afrikaans' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'English' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiNdebele' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SePedi' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SeSotho' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiSwati' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'Tshonga' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SeTswana' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'TshiVenda' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiXhosa' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiZulu' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Project Manager' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Team Lead' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Technical Lead' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Supervisor' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'General' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Engineer' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Senior Engineer' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Supplier' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Client' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Business Analyst' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Client Liason' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Eastern Cape' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Free State' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Gauteng' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'KwaZulu-Natal' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Limpopo' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Mpumalanga' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Northern Cape' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'North West' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Western Cape' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Miss' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ms' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Admiral' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Air Comm' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ambassador' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Baron' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Baroness' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brig & Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brig Gen' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brigadier' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brother' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Canon' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Capt' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Chief' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Cllr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Col' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Commander' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Commander & Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Consul' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Consul General' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Count' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Countess' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Countess of' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Cpl' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dame' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Deputy' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dr & Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Drs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Duchess' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Duke' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Earl' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Father' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'General' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Gräfin' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'HE' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'HMA' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Her Grace' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'His Excellency' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ing' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Judge' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Justice' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lady' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lic' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Llc' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lord' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lord & Lady' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt Col' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt Cpl' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'M' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Madam' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Madame' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Major' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Major General' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Marchioness' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Marquis' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Minister' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mme' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Dr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Ms' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prince' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Princess' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Professor' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Dr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Rev' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof Dame' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof Dr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Pvt' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rabbi' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rear Admiral' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev & Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev Canon' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev Dr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Senator' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sgt' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sheriff' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sir' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sir & Lady' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sister' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sqr. Leader' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Earl of' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Dr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Lady' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Lord' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Mrs' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Sir' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Honourable' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Dr' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Lord' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Sir' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Visc' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Viscount' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Other' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Created' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Not Started' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Started' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'On Hold' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Re-Started' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Cancelled' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Blocked' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'De-scoped' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'In Progress' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Completed' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Done' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Create' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Read' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Change' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Edit' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Update' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Delete' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Assign' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Assign' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Un-Assign' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Login' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Logout' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Registration' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'De-Registration' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Activation' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'De-Activation' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Termination' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Registration' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Activation' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Calculate' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Calculate' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Error' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Upload' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Download' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Message' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Email' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Send' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Receive' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Resend' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Expired' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'Number of Retries Reached' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Terminated' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Does Not Exist' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'Invalid Credentials' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Compromised' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Not Activated' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Root' AS [Value],NULL AS [Image], 'admin_panel_settings' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Admin' AS [Value],NULL AS [Image], 'supervisor_account' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Employee' AS [Value],NULL AS [Image], 'person' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Client' AS [Value],NULL AS [Image], 'stream' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Supplier' AS [Value],NULL AS [Image], 'reduce_capacity' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'General' AS [Value],NULL AS [Image], 'supervised_user_circle' AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Monthly' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Hourly' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Commission' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Overtime' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Retroactive' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Bonus' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Severance' AS [Value],NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Accrued Time Off' AS [Value],NULL AS [Image], NULL AS [Icon]
)
INSERT INTO [IdasGenioDb].[dbo].[LookupValue]([LookupCategoryId], [Value], [Image], [Icon], [CreatedBy])
SELECT DISTINCT
	[lc].[_id] AS [LookupCategoryId],
	CASE
		WHEN LEN(ISNULL([cte].[Value], '')) = 0 THEN 'Other'
		ELSE LTRIM(RTRIM([cte].[Value]))
	END AS [Value],
	[Image],
	ISNULL([Icon], 'report_problem') AS [Icon],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON LTRIM(RTRIM([cte].[LookupCategory])) = LTRIM(RTRIM([lc].[Name]))

PRINT ('>> Completed > INSERT > Default > [dbo].[LookupValue] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Employee(s) ([dbo].[Employee])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([EmployeeNumber], [SalutationId], [Name], [MiddleName], [Surname], [IdNumber], [BirthDate], [GenderId], [EmploymentTypeId], [PositionId], [DepartmentId], [ManagerId], [DateHired], [IsTerminated], [DateTerminated]) AS (
SELECT 'C62302' AS [EmployeeNumber], 'Ms' AS [SalutationId], 'Jane' AS [Name], NULL AS [MiddleName], 'Doe' AS [Surname], 9202204720082 AS [IdNumber], '1992-02-20' AS [BirthDate], 'Female' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'CEO' AS [PositionId], 'Management' AS [DepartmentId], NULL AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
SELECT 'M36517' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'John' AS [Name], NULL AS [MiddleName], 'Doe' AS [Surname], 9304195659081 AS [IdNumber], '1993-04-19' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Managing Director' AS [PositionId], 'Management' AS [DepartmentId], 'Jane Doe' AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
SELECT 'E37518' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Good' AS [Name], NULL AS [MiddleName], 'Job' AS [Surname], 9102127508084 AS [IdNumber], '1991-02-12' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'John Doe' AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
SELECT 'E95590' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Bad' AS [Name], NULL AS [MiddleName], 'Work' AS [Surname], 9610136334084 AS [IdNumber], '1996-10-13' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'Good Job' AS [ManagerId], '2016-07-23' AS [DateHired], 1 AS [IsTerminated], '2018-02-15' AS [DateTerminated] UNION
SELECT 'E87365' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Joe' AS [Name], NULL AS [MiddleName], 'Soap' AS [Surname], 8502065982080 AS [IdNumber], '1985-02-06' AS [BirthDate], 'Male' AS [GenderId], 'Consultant' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'Good Job' AS [ManagerId], '2018-04-30' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated]
)
INSERT INTO [IdasGenioDb].[dbo].[Employee]([EmployeeNumber], [SalutationId], [Name], [MiddleName], [Surname], [IdNumber], [BirthDate], [GenderId], [EmploymentTypeId], [PositionId], [DepartmentId], [ManagerId], [DateHired], [IsTerminated], [DateTerminated], [CreatedBy])
SELECT
	[cte].[EmployeeNumber],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lv].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[MiddleName],
	[cte].[Surname],
	[cte].[IdNumber],
	[cte].[BirthDate],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Gender' AND [lv].[Value] = [cte].[GenderId]) AS [GenderId],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'EmploymentType' AND [lv].[Value] = [cte].[EmploymentTypeId]) AS [EmploymentTypeId],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Position' AND [lv].[Value] = [cte].[PositionId]) AS [PositionId],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Department' AND [lv].[Value] = [cte].[DepartmentId]) AS [DepartmentId],
	[e].[_id] AS [ManagerId],
	[cte].[DateHired],
	[cte].[IsTerminated],
	[cte].[DateTerminated],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
LEFT JOIN [IdasGenioDb].[dbo].[Employee] AS [e] ON [cte].[ManagerId] = ([e].[Name] + ' ' + [e].[Surname])

PRINT ('>> Completed > INSERT > Default > [dbo].[Employee] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Client(s) ([dbo].[Client])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber]) AS (
SELECT 'Mr' AS [SalutationId], 'Close' [Name], 'Corporation' [Surname], 'Close Corporation' [CompanyName], 'Construction Services' [IndustryTypeId], '7707288001087' [IdNumber], '2009/222222/23' [RegistrationNumber], NULL [VATNumber] UNION
SELECT 'Mr' AS [SalutationId], 'Private' [Name], 'Company' [Surname], 'Private Company' [CompanyName], 'Entertainment Industry' [IndustryTypeId], '8105252255087' [IdNumber], '2016/222222/07' [RegistrationNumber], '4220122222' [VATNumber]
)
INSERT INTO [IdasGenioDb].[dbo].[Client]([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [CreatedBy])
SELECT
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lv].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[Surname],
	[cte].[CompanyName],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'IndustryType' AND [lv].[Value] = [cte].[IndustryTypeId]) AS [IndustryTypeId],
	[cte].[IdNumber],
	[cte].[RegistrationNumber],
	[cte].[VATNumber],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT > Default > [dbo].[Client] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Supplier(s) ([dbo].[Supplier])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [BankId], [AccountNumber]) AS (
SELECT 'Ms' AS [SalutationId], 'Thandi' AS [Name], 'Ndaba' AS [Surname], 'Thandi Ndaba Attorneys' AS [CompanyName], 'Attorneys/Law Firms' AS [IndustryTypeId], NULL AS [IdNumber], '2008/222222/23' AS [RegistrationNumber], 4820082222 AS [VATNumber], 'Absa Bank Ltd' AS [BankId], 1234567890123 AS [AccountNumber]
)
INSERT INTO [IdasGenioDb].[dbo].[Supplier]([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [BankId], [AccountNumber], [CreatedBy])
SELECT
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lv].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[Surname],
	[cte].[CompanyName],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'IndustryType' AND [lv].[Value] = [cte].[IndustryTypeId]) AS [IndustryTypeId],
	[cte].[IdNumber],
	[cte].[RegistrationNumber],
	[cte].[VATNumber],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Bank' AND [lv].[Value] = [cte].[BankId]) AS [BankId],
	[cte].[AccountNumber],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT > Default > [dbo].[Supplier] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Contact Detail(s) ([dbo].[ContactDetail])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([EmployeeId], [DepartmentId], [ClientId], [SupplierId], [RecipientsName], [TelephoneNumber], [OfficeTelephoneNumber], [MobileTelephoneNumber], [EmailAddress], [PreferredLanguageId], [UseEmailAddress], [UseTelephoneNumber], [Website], [AddressLine1], [AddressLine2], [City], [ProvinceId], [PostalCode], [Country]) AS (
SELECT 'Jane Doe' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], NULL AS [SupplierId], 'Jane Doe' AS [RecipientsName], '27311234567' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Jane.Doe@genio.idas.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'John Doe' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], NULL AS [SupplierId], 'John Doe' AS [RecipientsName], '27311234568' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'John.Doe@genio.idas.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Good Job' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], NULL AS [SupplierId], 'Good Job' AS [RecipientsName], '27311234569' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Good.Job@genio.idas.co.za' AS [EmailAddress], 'IsiZulu' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Bad Work' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], NULL AS [SupplierId], 'Bad Work' AS [RecipientsName], '27311234570' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Bad.Work@genio.idas.co.za' AS [EmailAddress], 'IsiZulu' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Joe Soap' AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], NULL AS [SupplierId], 'Joe Soap' AS [RecipientsName], '27311234571' AS [TelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'Joe.Soap@genio.idas.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], NULL AS [DepartmentId], 'Close Corporation' AS [ClientId], NULL AS [SupplierId], 'Close Corporation' AS [RecipientsName], '27311234572' AS [TelephoneNumber], '27311234572' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'info@closecorporation.co.za' AS [EmailAddress], 'IsiXhosa' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.closecorporation.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], NULL AS [DepartmentId], 'Private Company' AS [ClientId], NULL AS [SupplierId], 'Private Company' AS [RecipientsName], '27311234573' AS [TelephoneNumber], '27311234573' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'info@privatecompany.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '0' AS [UseTelephoneNumber], 'www.privatecompany.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], NULL AS [DepartmentId], NULL AS [ClientId], 'Thandi Ndaba' AS [SupplierId], 'Thandi Ndaba Attorneys' AS [RecipientsName], '27311234573' AS [TelephoneNumber], '27311234573' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'info@thandindabaattorneys.co.za' AS [EmailAddress], 'English' AS [PreferredLanguageId], '1' AS [UseEmailAddress], '1' AS [UseTelephoneNumber], 'www.thandindabaattorneys.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country]
)
INSERT INTO [IdasGenioDb].[dbo].[ContactDetail]([EmployeeId], [DepartmentId], [ClientId], [SupplierId], [RecipientsName], [TelephoneNumber], [OfficeTelephoneNumber], [MobileTelephoneNumber], [EmailAddress], [PreferredLanguageId], [UseEmailAddress], [UseTelephoneNumber], [Website], [AddressLine1], [AddressLine2], [City], [ProvinceId], [PostalCode], [Country], [CreatedBy])
SELECT
	[e].[_id] AS [EmployeeId],
	[d].[_id] AS [DepartmentId],
	[c].[_id] AS [ClientId],
	[s].[_id] AS [SupplierId],
	[RecipientsName],
	[TelephoneNumber],
	[OfficeTelephoneNumber],
	[MobileTelephoneNumber],
	[EmailAddress],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'PreferredLanguage' AND [lv].[Value] = [cte].[PreferredLanguageId]) AS [PreferredLanguageId],
	[UseEmailAddress],
	[UseTelephoneNumber],
	[Website],
	[AddressLine1],
	[AddressLine2],
	[City],
	(SELECT [lv].[_id] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv] JOIN [IdasGenioDb].[dbo].[LookupCategory] AS [lc] ON [lv].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Province' AND [lv].[Value] = [cte].[ProvinceId]) AS [ProvinceId],
	[PostalCode],
	[Country],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
LEFT JOIN [IdasGenioDb].[dbo].[Employee] AS [e] ON [cte].[EmployeeId] = ([e].[Name] + ' ' + [e].[Surname])
LEFT JOIN [IdasGenioDb].[dbo].[Department] AS [d] ON [cte].[DepartmentId] = [d].[Name]
LEFT JOIN [IdasGenioDb].[dbo].[Client] AS [c] ON [cte].[ClientId] = ([c].[Name] + ' ' + [c].[Surname])
LEFT JOIN [IdasGenioDb].[dbo].[Supplier] AS [s] ON [cte].[SupplierId] = ([s].[Name] + ' ' + [s].[Surname])

PRINT ('>> Completed > INSERT > Default > [dbo].[ContactDetail] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Employee and Client User(s) ([dbo].[User])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([EmployeeId], [ClientId], [SupplierId], [EmailAddress]) AS (
SELECT [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], [EmailAddress] FROM [IdasGenioDb].[dbo].[ContactDetail] WHERE [EmployeeId] IS NOT NULL UNION
SELECT NULL AS [EmployeeId], [ClientId], NULL AS [SupplierId], [EmailAddress] FROM [IdasGenioDb].[dbo].[ContactDetail] WHERE [ClientId] IS NOT NULL UNION
SELECT NULL AS [EmployeeId], NULL AS [ClientId], [SupplierId], [EmailAddress] FROM [IdasGenioDb].[dbo].[ContactDetail] WHERE [SupplierId] IS NOT NULL
)
INSERT INTO [IdasGenioDb].[dbo].[User]([EmployeeId], [ClientId], [SupplierId], [EmailAddress], [Password], [IsAdmin], [IsLocked], [IsActive], [DateLastLoggedIn], [CreatedBy])
SELECT
	[EmployeeId],
	[ClientId],
	[SupplierId],
	[EmailAddress],
	'admin@123' AS [Password],
	0 AS [IsAdmin],
	0 AS [IsLocked],
	1 AS [IsActive],
	GETDATE() AS [DateLastLoggedIn],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT > Default > [dbo].[User] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default User Group(s) ([dbo].[UserGroup])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([UserId], [GroupId]) AS (
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdasGenioDb].[dbo].[User] AS [u], [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc] WHERE [u].[EmailAddress] = 'root@genio.idas.co.za' AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' UNION
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdasGenioDb].[dbo].[User] AS [u], [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc] WHERE [u].[EmailAddress] = 'admin@genio.idas.co.za' AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Administrators' UNION
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdasGenioDb].[dbo].[User] AS [u], [IdasGenioDb].[dbo].[Employee] AS [e], [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc] WHERE [u].[EmployeeId] = [e].[_id] AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Employees' UNION
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdasGenioDb].[dbo].[User] AS [u], [IdasGenioDb].[dbo].[Client] AS [c], [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc] WHERE [u].[ClientId] = [c].[_id] AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Clients' UNION
SELECT [u].[_id] AS [UserId], [lv].[_id] AS [GroupId] FROM [IdasGenioDb].[dbo].[User] AS [u], [IdasGenioDb].[dbo].[Supplier] AS [s], [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc] WHERE [u].[SupplierId] = [s].[_id] AND [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Suppliers'
)
INSERT INTO [dbo].[UserGroup]([UserId], [GroupId], [CreatedBy])
SELECT
	[UserId],
	[GroupId],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT > Default > [dbo].[UserGroup] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Menu Item(s) ([dbo].[MenuItem])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([rowId], [Path], [Title], [Image], [Icon], [Class], [Configuration], [Component]) AS (
SELECT 1 AS [rowId], '/dashboard' AS [path], 'Dashboard' AS [title],NULL AS [image], 'dashboard' AS [icon],NULL AS [class], 'DashboardConfiguration' AS [configuration], 'DashboardComponent' AS [component] UNION
SELECT 2 AS [rowId], '/profile' AS [path], 'My Profile' AS [title],NULL AS [image], 'person' AS [icon],NULL AS [class], 'UserProfileConfiguration' AS [configuration], 'UserProfileComponent' AS [component] UNION
SELECT 3 AS [rowId], '/notifications' AS [path], 'My Notifications' AS [title],NULL AS [image], 'circle_notifications' AS [icon],NULL AS [class], 'UserNotificationsConfiguration' AS [configuration], 'UserNotificationsComponent' AS [component] UNION
SELECT 4 AS [rowId], '/inbox' AS [path], 'My Inbox' AS [title],NULL AS [image], 'mail_outline' AS [icon],NULL AS [class], 'UserInboxConfiguration' AS [configuration], 'UserInboxComponent' AS [component] UNION
SELECT 5 AS [rowId], '/schedule' AS [path], 'My Schedule' AS [title],NULL AS [image], 'event' AS [icon],NULL AS [class], 'UserScheduleConfiguration' AS [configuration], 'UserScheduleComponent' AS [component] UNION
SELECT 6 AS [rowId], '/projects' AS [path], 'My Projects' AS [title],NULL AS [image], 'auto_awesome_motion' AS [icon],NULL AS [class], 'UserProjectsConfiguration' AS [configuration], 'UserProjectsComponent' AS [component] UNION
SELECT 7 AS [rowId], '/tasks' AS [path], 'My Tasks' AS [title],NULL AS [image], 'tune' AS [icon],NULL AS [class], 'UserTasksConfiguration' AS [configuration], 'UserTasksComponent' AS [component] UNION
SELECT 8 AS [rowId], '/employees' AS [path], 'Employees' AS [title],NULL AS [image], 'groups' AS [icon],NULL AS [class], 'EmployeesConfiguration' AS [configuration], 'EmployeesComponent' AS [component] UNION
SELECT 9 AS [rowId], '/clients' AS [path], 'Clients' AS [title],NULL AS [image], 'stream' AS [icon],NULL AS [class], 'ClientsConfiguration' AS [configuration], 'ClientsComponent' AS [component] UNION
SELECT 10 AS [rowId], '/suppliers' AS [path], 'Suppliers' AS [title],NULL AS [image], 'reduce_capacity' AS [icon],NULL AS [class], 'SuppliersConfiguration' AS [configuration], 'SuppliersComponent' AS [component] UNION
SELECT 11 AS [rowId], '/users' AS [path], 'Users' AS [title],NULL AS [image], 'manage_accounts' AS [icon],NULL AS [class], 'UsersConfiguration' AS [configuration], 'UsersComponent' AS [component]
)
INSERT INTO [IdasGenioDb].[dbo].[MenuItem]([Path], [Title], [Image], [Icon], [Class], [Configuration], [Component], [CreatedBy])
SELECT
	[Path],
	[Title],
	[Image],
	[Icon],
	[Class],
	[Configuration],
	[Component],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
ORDER BY [rowId]

PRINT ('>> Completed > INSERT > Default > [dbo].[MenuItem] data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default Group Menu Item(s) ([dbo].[GroupMenuItem])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

;WITH [cte] ([GroupId], [MenuItemId]) AS (
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc], [IdasGenioDb].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Administrators' AND [mi].[Title] IN ('Clients', 'Dashboard', 'My Employees', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile', 'My Projects', 'Suppliers') UNION
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc], [IdasGenioDb].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Employees' AND [mi].[Title] IN ('Dashboard', 'My Employees', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile', 'My Projects')  UNION
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc], [IdasGenioDb].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Clients' AND [mi].[Title] IN ('Dashboard', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile', 'My Projects')  UNION
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc], [IdasGenioDb].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'General' AND [mi].[Title] IN ('Dashboard', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile')  UNION
SELECT [lv].[_id] AS [GroupId], [mi].[_id] AS [MenuItemId] FROM [IdasGenioDb].[dbo].[LookupValue] AS [lv], [IdasGenioDb].[dbo].[LookupCategory] AS [lc], [IdasGenioDb].[dbo].[MenuItem] AS [mi] WHERE [lv].[LookupCategoryId] = [lc].[_id] AND [lc].[Name] = 'Group' AND [lv].[Value] = 'Suppliers' AND [mi].[Title] IN ('Dashboard', 'My Inbox', 'My Schedule', 'My Notifications', 'User Profile')
)
INSERT INTO [IdasGenioDb].[dbo].[GroupMenuItem]([GroupId], [MenuItemId], [CreatedBy])
SELECT
	[GroupId],
	[MenuItemId],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT > Default > [dbo].[GroupMenuItem] data')
GO

;WITH [cte] ([Name], [Description], [StartDate], [EndDate]) AS (
SELECT 'Test Project 1' AS [Name], 'Test Project 1' AS [Description], '1/1/2021' AS [StartDate], '1/31/2021' AS [EndDate] UNION
SELECT 'Test Project 2' AS [Name], 'Test Project 2' AS [Description], '2/1/2021' AS [StartDate], '2/28/2021' AS [EndDate] UNION
SELECT 'Test Project 3' AS [Name], 'Test Project 3' AS [Description], '3/1/2021' AS [StartDate], '3/31/2021' AS [EndDate]
)
INSERT INTO [IdasGenioDb].[dbo].[Project]([Name], [Description], [StartDate], [EndDate], [CreatedBy])
SELECT
	[Name],
	[Description],
	[StartDate],
	[EndDate],
	(SELECT [_id] FROM [IdasGenioDb].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT > Default > [dbo].[Project] data')
GO

PRINT ('>> Completed > INSERT > Default Data Setup')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Enabling Broker setting on IdasGenioDb
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

ALTER DATABASE [IdasGenioDb] SET ENABLE_BROKER WITH ROLLBACK IMMEDIATE
 
-- To check weather broker is enable or not run this query.

SELECT is_broker_enabled FROM sys.databases WHERE name = 'IdasGenioDb'

-- To kill all the database running process, write this query.

USE [master];

GO

DECLARE @dbname sysname

SET @dbname = 'IdasGenioDb'

DECLARE @spid int

SELECT @spid = min(spid) from master.dbo.sysprocesses where dbid = db_id(@dbname)

WHILE @spid IS NOT NULL

BEGIN

EXECUTE ('KILL ' + @spid)

SELECT @spid = min(spid) from master.dbo.sysprocesses where dbid = db_id(@dbname) AND spid > @spid

END

ALTER DATABASE [IdasGenioDb] SET ENABLE_BROKER

GO

PRINT ('>> Completed > Enabling Broker setting on IdasGenioDb')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Script has ended
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

SELECT '[IdasGenioDb].[dbo].[Employee]' AS [TableName], * FROM [IdasGenioDb].[dbo].[Employee]
SELECT '[IdasGenioDb].[dbo].[Client]' AS [TableName], * FROM [IdasGenioDb].[dbo].[Client]
SELECT '[IdasGenioDb].[dbo].[Supplier]' AS [TableName], * FROM [IdasGenioDb].[dbo].[Supplier]
SELECT '[IdasGenioDb].[dbo].[ContactDetail]' AS [TableName], * FROM [IdasGenioDb].[dbo].[ContactDetail]
SELECT '[IdasGenioDb].[dbo].[GetAllUsers]' AS [TableName], * FROM [IdasGenioDb].[dbo].[GetAllUsers]()
SELECT '[IdasGenioDb].[dbo].[UserGroup]' AS [TableName], * FROM [IdasGenioDb].[dbo].[UserGroup]
SELECT '[IdasGenioDb].[dbo].[GroupMenuItem]' AS [TableName], * FROM [IdasGenioDb].[dbo].[GroupMenuItem]
SELECT '[IdasGenioDb].[dbo].[Project]' AS [TableName], * FROM [IdasGenioDb].[dbo].[Project]

PRINT ('>> Done')
GO