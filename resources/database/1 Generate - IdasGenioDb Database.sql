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
	USE [IdasGenioDb];
	EXEC [dbo].[sp_fulltext_database] @action = 'enable'

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

IF (OBJECT_ID(N'[dbo].[User]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[User];
	PRINT ('>> Completed > Drop > Table > [dbo].[User]')
END
GO

IF (OBJECT_ID(N'[dbo].[Employee]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Employee];
	PRINT ('>> Completed > Drop > Table > [dbo].[Employee]')
END
GO

IF (OBJECT_ID(N'[dbo].[Department]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Department];
	PRINT ('>> Completed > Drop > Table > [dbo].[Department]')
END
GO

IF (OBJECT_ID(N'[dbo].[Client]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Client];
	PRINT ('>> Completed > Drop > Table > [dbo].[Client]')
END
GO

IF (OBJECT_ID(N'[dbo].[ContactDetail]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ContactDetail];
	PRINT ('>> Completed > Drop > Table > [dbo].[ContactDetail]')
END
GO

IF (OBJECT_ID(N'[dbo].[EmployeeSalary]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[EmployeeSalary];
	PRINT ('>> Completed > Drop > Table > [dbo].[EmployeeSalary]')
END
GO

IF (OBJECT_ID(N'[dbo].[Project]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Project];
	PRINT ('>> Completed > Drop > Table > [dbo].[Project]')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectAssignment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectAssignment];
	PRINT ('>> Completed > Drop > Table > [dbo].[ProjectAssignment]')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectComment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectComment];
	PRINT ('>> Completed > Drop > Table > [dbo].[ProjectComment]')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectWorkLog]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectWorkLog];
	PRINT ('>> Completed > Drop > Table > [dbo].[ProjectWorkLog]')
END
GO

IF (OBJECT_ID(N'[dbo].[ProjectStatus]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[ProjectStatus];
	PRINT ('>> Completed > Drop > Table > [dbo].[ProjectStatus]')
END
GO

IF (OBJECT_ID(N'[dbo].[Task]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Task];
	PRINT ('>> Completed > Drop > Table > [dbo].[Task]')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskAssignment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskAssignment];
	PRINT ('>> Completed > Drop > Table > [dbo].[TaskAssignment]')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskComment]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskComment];
	PRINT ('>> Completed > Drop > Table > [dbo].[TaskComment]')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskWorkLog]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskWorkLog];
	PRINT ('>> Completed > Drop > Table > [dbo].[TaskWorkLog]')
END
GO

IF (OBJECT_ID(N'[dbo].[TaskStatus]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[TaskStatus];
	PRINT ('>> Completed > Drop > Table > [dbo].[TaskStatus]')
END
GO

IF (OBJECT_ID(N'[dbo].[LookupCategory]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[LookupCategory];
	PRINT ('>> Completed > Drop > Table > [dbo].[LookupCategory]')
END
GO

IF (OBJECT_ID(N'[dbo].[LookupValue]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[LookupValue];
	PRINT ('>> Completed > Drop > Table > [dbo].[LookupValue]')
END
GO

IF (OBJECT_ID(N'[dbo].[UserGroup]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserGroup];
	PRINT ('>> Completed > Drop > Table > [dbo].[UserGroup]')
END
GO

IF (OBJECT_ID(N'[dbo].[UserGroupCapacity]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserGroupCapacity];
	PRINT ('>> Completed > Drop > Table > [dbo].[UserGroupCapacity]')
END
GO

IF (OBJECT_ID(N'[dbo].[UserLocks]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserLocks];
	PRINT ('>> Completed > Drop > Table > [dbo].[UserLocks]')
END
GO

IF (OBJECT_ID(N'[dbo].[UserTransaction]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[UserTransaction];
	PRINT ('>> Completed > Drop > Table > [dbo].[UserTransaction]')
END
GO

IF (OBJECT_ID(N'[dbo].[Entity]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Entity];
	PRINT ('>> Completed > Drop > Table > [dbo].[Entity]')
END
GO

IF (OBJECT_ID(N'[dbo].[EntityRelationship]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[EntityRelationship];
	PRINT ('>> Completed > Drop > Table > [dbo].[EntityRelationship]')
END
GO

IF (OBJECT_ID(N'[dbo].[EntityUserGroupCapacity]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[EntityUserGroupCapacity];
	PRINT ('>> Completed > Drop > Table > [dbo].[EntityUserGroupCapacity]')
END
GO

IF (OBJECT_ID(N'[dbo].[MenuItem]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[MenuItem];
	PRINT ('>> Completed > Drop > Table > [dbo].[MenuItem]')
END
GO

IF (OBJECT_ID(N'[dbo].[MenuItemUser]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[MenuItemUser];
	PRINT ('>> Completed > Drop > Table > [dbo].[MenuItemUser]')
END
GO

IF (OBJECT_ID(N'[dbo].[GroupMenuItem]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[GroupMenuItem];
	PRINT ('>> Completed > Drop > Table > [dbo].[GroupMenuItem]')
END
GO

IF (OBJECT_ID(N'[dbo].[Supplier]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[Supplier];
	PRINT ('>> Completed > Drop > Table > [dbo].[Supplier]')
END
GO

IF (OBJECT_ID(N'[dbo].[NotificationMessage]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[NotificationMessage];
	PRINT ('>> Completed > Drop > Table > [dbo].[NotificationMessage]')
END
GO

IF (OBJECT_ID(N'[dbo].[InboxMessage]', 'U') IS NOT NULL)
BEGIN
    DROP TABLE [dbo].[InboxMessage];
	PRINT ('>> Completed > Drop > Table > [dbo].[InboxMessage]')
END
GO

PRINT ('>> Completed > Drop existing tables')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Creating all tables
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

-- Create the [dbo].[User] table
CREATE TABLE [dbo].[User](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint] NULL,
	[ClientId] [bigint] NULL,
	[SupplierId] [bigint] NULL,
	[EmailAddress] [nvarchar] (320) NOT NULL,
	[PasswordHash] [varchar] (255) NOT NULL,
	[UserTypeId] [bigint] NULL,
	[IsAdmin] [bit] NULL,
	[IsLocked] [bit] NULL,
	[Avatar] [varchar] (255) NULL,
	[DateLastLoggedIn] [datetime] NULL,
	[SessionToken] [varchar] (255) NULL,
	[IsActive] [bit] NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[User]')
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
PRINT ('>> Completed > Create > Table > [dbo].[LookupCategory]')
GO

-- Create the [dbo].[LookupValue] table
CREATE TABLE [dbo].[LookupValue](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[LookupCategoryId] [bigint] NOT NULL,
	[Value] [nvarchar] (255) NOT NULL,
	[Value2] [nvarchar] (255) NULL,
	[Value3] [nvarchar] (255) NULL,
	[Image] [nvarchar] (255) NULL,
	[Icon] [nvarchar] (255) NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[LookupValue]')
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
PRINT ('>> Completed > Create > Table > [dbo].[Entity]')
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
PRINT ('>> Completed > Create > Table > [dbo].[EntityRelationship]')
GO

-- Create the [dbo].[EntityUserGroupCapacity] table
CREATE TABLE [dbo].[EntityUserGroupCapacity](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EntityId] [bigint] NOT NULL,
	[UserGroupId] [bigint] NOT NULL,
	[CanCreate] [bit] NULL,
	[CanView] [bit] NULL,
	[CanEdit] [bit] NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[EntityUserGroupCapacity]')
GO

-- Create the [dbo].[EntityChangeHistory] table
CREATE TABLE [dbo].[EntityChangeHistory](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Operation] [nvarchar](8) NOT NULL,
	[EntityName] [nvarchar](255) NOT NULL,
	[id] [bigint] NOT NULL,
	[CurrentValue] [nvarchar](MAX) NOT NULL,
	[PreviousValue] [nvarchar](MAX) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_EntityChangeHistory] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create the [dbo].[EntityChangeHistory] table, successfully')
GO

-- Create the [dbo].[Employee] table
CREATE TABLE [dbo].[Employee](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
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
	[EmployeeNumber] [nvarchar] (10) NOT NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[Employee]')
GO

-- Create the [dbo].[Department] table
--CREATE TABLE [dbo].[Department](
--	[_id] [bigint] IDENTITY(1,1) NOT NULL,
--	[Name] [nvarchar] (35) NOT NULL,
--	[BudgetCodeId] [bigint] NULL,
--	[ManagerId] [bigint] NULL,
--	[IsActive] [bit] NULL,
--	[CreatedBy] [bigint] NOT NULL,
--	[DateCreated] [datetime] NOT NULL,
--	[ModifiedBy] [bigint] NULL,
--	[DateModified] [datetime] NULL,
-- CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
--(
--	[_id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]
--GO
--PRINT ('>> Completed > Create > Table > [dbo].[Department]')
--GO

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
PRINT ('>> Completed > Create > Table > [dbo].[Client]')
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
PRINT ('>> Completed > Create > Table > [dbo].[Supplier]')
GO

-- Create the [dbo].[ContactDetail] table
CREATE TABLE [dbo].[ContactDetail](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[EmployeeId] [bigint]  NULL,
	[ClientId] [bigint]  NULL,
	[SupplierId] [bigint]  NULL,
	[RecipientsName] [nvarchar] (255) NULL,
	[EmailAddress] [nvarchar] (320) NULL,
	[HomeTelephoneNumber] [bigint]  NULL,
	[OfficeTelephoneNumber] [bigint]  NULL,
	[MobileTelephoneNumber] [bigint]  NULL,
	[Website] [nvarchar] (max) NULL,
	[AddressLine1] [nvarchar] (30) NULL,
	[AddressLine2] [nvarchar] (30) NULL,
	[City] [nvarchar] (30) NULL,
	[ProvinceId] [bigint]  NULL,
	[PostalCode] [nvarchar] (30) NULL,
	[CountryId] [bigint]  NULL,
	[PreferredLanguageId] [bigint]  NULL,
	[UseEmailAddress] [bit]  NULL,
	[UseHomeTelephoneNumber] [bit]  NULL,
	[UseOfficeTelephoneNumber] [bit]  NULL,
	[UseMobileTelephoneNumber] [bit]  NULL,
	[UsePostalAddress] [bit]  NULL,
	[IsActive] [bit]  NULL,
	[CreatedBy] [bigint]  NULL,
	[DateCreated] [datetime]  NULL,
	[ModifiedBy] [bigint]  NULL,
	[DateModified] [datetime]  NULL,
 CONSTRAINT [PK_ContactDetail] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[ContactDetail]')
GO

-- Create the [dbo].[EmployeeSalary] table
--CREATE TABLE [dbo].[EmployeeSalary](
--	[_id] [bigint] IDENTITY(1,1) NOT NULL,
--	[EmployeeId] [bigint] NOT NULL,
--	[WageTypeId] [bigint] NOT NULL,
--	[Amount] [bigint] NOT NULL,
--	[IsActive] [bit] NULL,
--	[CreatedBy] [bigint] NOT NULL,
--	[DateCreated] [datetime] NOT NULL,
--	[ModifiedBy] [bigint] NULL,
--	[DateModified] [datetime] NULL,
-- CONSTRAINT [PK_EmployeeSalary] PRIMARY KEY CLUSTERED 
--(
--	[_id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]
--GO
--PRINT ('>> Completed > Create > Table > [dbo].[EmployeeSalary]')
--GO

-- Create the [dbo].[Project] table
CREATE TABLE [dbo].[Project](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[Code] [nvarchar] (255) NOT NULL,
	[Description] [nvarchar] (255) NULL,
	[ProjectTypeId] [bigint]  NULL,
	[PriorityId] [bigint]  NULL,
	[StartDate] [datetime]  NULL,
	[EndDate] [datetime]  NULL,
	[MaximumHoursAllocated] AS (CAST(DATEDIFF(HOUR, [StartDate], [EndDate]) AS FLOAT)),
	[ParentProjectId] [bigint]  NULL,
	[IsActive] [bit]  NULL,
	[CreatedBy] [bigint]  NULL,
	[DateCreated] [datetime]  NULL,
	[ModifiedBy] [bigint]  NULL,
	[DateModified] [datetime]  NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[Project]')
GO

-- Create the [dbo].[ProjectAssignment] table
CREATE TABLE [dbo].[ProjectAssignment](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[ProjectAssignmentTypeId] [bigint] NOT NULL,
	[AssigneeId] [bigint] NOT NULL,
	--[PreviousAssigneeId] [bigint] NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[ProjectAssignment]')
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
PRINT ('>> Completed > Create > Table > [dbo].[ProjectComment]')
GO

-- Create the [dbo].[ProjectWorkLog] table
CREATE TABLE [dbo].[ProjectWorkLog](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[Description] [nvarchar] (max) NOT NULL,
	[HoursWorked] AS (CAST(DATEDIFF(HOUR, [StartDate], GETDATE()) AS FLOAT)),
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
PRINT ('>> Completed > Create > Table > [dbo].[ProjectWorkLog]')
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
PRINT ('>> Completed > Create > Table > [dbo].[ProjectStatus]')
GO

-- Create the [dbo].[Task] table
CREATE TABLE [dbo].[Task](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[Name] [nvarchar] (255) NOT NULL,
	[Description] [nvarchar] (500) NOT NULL,
	[TaskTypeId] [bigint] NULL,
	[PriorityId] [bigint] NULL,
	[ParentTaskId] [bigint] NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[Task]')
GO

-- Create the [dbo].[TaskAssignment] table
CREATE TABLE [dbo].[TaskAssignment](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskId] [bigint] NOT NULL,
	[AssigneeId] [bigint] NOT NULL,
	--[PreviousAssigneeId] [bigint] NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[TaskAssignment]')
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
PRINT ('>> Completed > Create > Table > [dbo].[TaskComment]')
GO

-- Create the [dbo].[TaskWorkLog] table
CREATE TABLE [dbo].[TaskWorkLog](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskId] [bigint] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[Description] [nvarchar] (max) NOT NULL,
	[HoursWorked] AS (CAST(DATEDIFF(HOUR, [StartDate], GETDATE()) AS FLOAT)),
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
PRINT ('>> Completed > Create > Table > [dbo].[TaskWorkLog]')
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
PRINT ('>> Completed > Create > Table > [dbo].[TaskStatus]')
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
PRINT ('>> Completed > Create > Table > [dbo].[UserGroup]')
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
PRINT ('>> Completed > Create > Table > [dbo].[UserGroupCapacity]')
GO

-- Create the [dbo].[MenuItem] table
CREATE TABLE [dbo].[MenuItem](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar] (255) NOT NULL,
	[Path] [nvarchar] (255) NOT NULL,
	[Image] [nvarchar] (255) NULL,
	[Icon] [nvarchar] (255) NULL,
	[Component] [nvarchar] (255) NOT NULL,
	[Configuration] [nvarchar] (255) NOT NULL,
	[CssClass] [nvarchar] (255) NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[MenuItem]')
GO

-- Create the [dbo].[CalendarEvent] table
CREATE TABLE [dbo].[CalendarEvent](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[CalendarEventTypeId] [bigint]  NULL,
	[Title] [nvarchar] (max) NULL,
	[StartDate] [datetime]  NULL,
	--[StartTime] [nvarchar] (10)  NULL,
	[EndDate] [datetime]  NULL,
	--[EndTime] [nvarchar] (10)  NULL,
	[IsAllDayEvent] [bit]  NULL,
	[Location] [nvarchar] (max) NULL,
	[Description] [nvarchar] (max) NULL,
	[IsActive] [bit]  NULL,
	[CreatedBy] [bigint]  NULL,
	[DateCreated] [datetime]  NULL,
	[ModifiedBy] [bigint]  NULL,
	[DateModified] [datetime]  NULL,
 CONSTRAINT [PK_CalendarEvent] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[CalendarEvent]')
GO

-- Create the [dbo].[CalendarEventAttendee] table
CREATE TABLE [dbo].[CalendarEventAttendee](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[CalendarEventId] [bigint]  NOT NULL,
	[AttendeeId] [bigint]  NOT NULL,
	[IsAccepted] [bit]  NULL,
	[IsRejected] [bit]  NULL,
	[IsTentative] [bit]  NULL,
	[IsActive] [bit]  NULL,
	[CreatedBy] [bigint]  NULL,
	[DateCreated] [datetime]  NULL,
	[ModifiedBy] [bigint]  NULL,
	[DateModified] [datetime]  NULL,
 CONSTRAINT [PK_CalendarEventAttendee] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[CalendarEventAttendee]')
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
PRINT ('>> Completed > Create > Table > [dbo].[UserLocks]')
GO

-- Create the [dbo].[UserTransaction] table
CREATE TABLE [dbo].[UserTransaction](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
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
PRINT ('>> Completed > Create > Table > [dbo].[UserTransaction]')
GO

-- Create the [dbo].[UserSchedule] table
--CREATE TABLE [dbo].[UserSchedule](
--	[_id] [bigint] IDENTITY(1,1) NOT NULL,
--	[UserId] [bigint] NOT NULL,
--	[ScheduleId] [bigint] NOT NULL,
--	[IsActive] [bit]  NULL,
--	[CreatedBy] [bigint]  NULL,
--	[DateCreated] [datetime]  NULL,
--	[ModifiedBy] [bigint]  NULL,
--	[DateModified] [datetime]  NULL,
-- CONSTRAINT [PK_UserSchedule] PRIMARY KEY CLUSTERED 
--(
--	[_id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]
--GO
--PRINT ('>> Completed > Create > Table > [dbo].[UserSchedule]')
--GO

-- Create the [dbo].[MenuItemUser] table
--CREATE TABLE [dbo].[MenuItemUser](
--	[_id] [bigint] IDENTITY(1,1) NOT NULL,
--	[MenuItemId] [bigint] NOT NULL,
--	[UserId] [bigint] NOT NULL,
--	[IsActive] [bit] NULL,
--	[CreatedBy] [bigint] NOT NULL,
--	[DateCreated] [datetime] NOT NULL,
--	[ModifiedBy] [bigint] NULL,
--	[DateModified] [datetime] NULL,
-- CONSTRAINT [PK_MenuItemUser] PRIMARY KEY CLUSTERED 
--(
--	[_id] ASC
--)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--) ON [PRIMARY]
--GO
--PRINT ('>> Completed > Create > Table > [dbo].[MenuItemUser]')
--GO

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
PRINT ('>> Completed > Create > Table > [dbo].[GroupMenuItem]')
GO

-- Create the [dbo].[UserTypeMenuItem] table
CREATE TABLE [dbo].[UserTypeMenuItem](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[UserTypeId] [bigint] NOT NULL,
	[MenuItemId] [bigint] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_UserTypeMenuItem] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[UserTypeMenuItem]')
GO

-- Create the [dbo].[NotificationMessage] table
CREATE TABLE [dbo].[NotificationMessage](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[TransactionTypeId] [bigint] NULL,
	[EntityId] [bigint] NULL,
	[UserId] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NULL,
	[DateCreated] [datetime] NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_NotificationMessage] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[NotificationMessage]')
GO

-- Create the [dbo].[InboxMessage] table
CREATE TABLE [dbo].[InboxMessage](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[From] [nvarchar] (max) NULL,
	[To] [nvarchar] (max) NULL,
	[Cc] [nvarchar] (max) NULL,
	[Bcc] [nvarchar] (max) NULL,
	[Subject] [nvarchar] (max) NULL,
	[Message] [nvarchar] (max) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NULL,
	[DateCreated] [datetime] NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_InboxMessage] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[InboxMessage]')
GO

-- Create the [dbo].[FileAttachment] table
CREATE TABLE [dbo].[FileAttachment](
	[_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NULL,
	[TaskId] [bigint] NULL,
	[CalendarEventId] [bigint] NULL,
	[FileName] [nvarchar] (max) NOT NULL,
	[FileSize] [bigint] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [bigint] NULL,
	[DateCreated] [datetime] NULL,
	[ModifiedBy] [bigint] NULL,
	[DateModified] [datetime] NULL,
 CONSTRAINT [PK_FileAttachment] PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
PRINT ('>> Completed > Create > Table > [dbo].[FileAttachment]')
GO

PRINT ('>> Completed > Create > Table(s)')
GO

CREATE VIEW [dbo].[vwRandomEmployeeNumber]
AS
SELECT CAST((RAND() * (899999) + 100000) AS BIGINT) AS [REN]
GO
PRINT ('>> Completed > Create > View > [dbo].[vwRandomEmployeeNumber], successfully')
GO

GO

PRINT ('>> Completed > Create > View(s)')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

DECLARE @TableName NVARCHAR(255);
DECLARE Cursor_Table_Names CURSOR FOR SELECT [name] FROM [sys].[tables] WHERE ([name] NOT IN ('EntityChangeHistory'));

OPEN Cursor_Table_Names;
FETCH NEXT FROM Cursor_Table_Names INTO @TableName;

WHILE(@@FETCH_STATUS = 0)
BEGIN
	DECLARE @ColumnName NVARCHAR(255);
	DECLARE @ReferenceTableName NVARCHAR(255);
	DECLARE @ForeignKeyConstraintName NVARCHAR(255);
	DECLARE @ExecAlterTableAddWithCheckConstraint NVARCHAR(MAX);
	DECLARE @ExecAlterTableCheckConstraint NVARCHAR(MAX);
	DECLARE Cursor_Table_ColumnNames CURSOR FOR
	SELECT
		[ac].[name] AS [ColumnName]
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[name] NOT IN ('_id', 'IdNumber', 'VATNumber', 'HomeTelephoneNumber', 'OfficeTelephoneNumber', 'MobileTelephoneNumber', 'Amount', 'AccountNumber', 'FileSize'))
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ty].[name] = 'bigint')
	
	OPEN Cursor_Table_ColumnNames;
	FETCH NEXT FROM Cursor_Table_ColumnNames INTO @ColumnName;
	
	WHILE(@@FETCH_STATUS = 0)
	BEGIN
		-- Employee
		IF(@ColumnName IN ('EmployeeId', 'ManagerId'))
		BEGIN
			SET @ReferenceTableName = 'Employee';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- Client
		ELSE IF(@ColumnName IN ('ClientId'))
		BEGIN
			SET @ReferenceTableName = 'Client';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- Supplier
		ELSE IF(@ColumnName IN ('SupplierId'))
		BEGIN
			SET @ReferenceTableName = 'Supplier';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- User
		ELSE IF(@ColumnName IN ('CreatedBy', 'ModifiedBy', 'UserId', 'AssigneeId', 'PreviousAssigneeId', 'LoggedBy', 'AttendeeId'))
		BEGIN
			SET @ReferenceTableName = 'User';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- Entity
		ELSE IF(@ColumnName IN ('EntityId', 'ParentEntityId', 'ChildEntityId'))
		BEGIN
			SET @ReferenceTableName = 'Entity';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- MenuItem
		ELSE IF(@ColumnName IN ('MenuItemId'))
		BEGIN
			SET @ReferenceTableName = 'MenuItem';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- UserGroup
		ELSE IF(@ColumnName IN ('UserGroupId'))
		BEGIN
			SET @ReferenceTableName = 'UserGroup';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- Project
		ELSE IF(@ColumnName IN ('ProjectId', 'ParentProjectId'))
		BEGIN
			SET @ReferenceTableName = 'Project';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- Task
		ELSE IF(@ColumnName IN ('TaskId', 'ParentTaskId'))
		BEGIN
			SET @ReferenceTableName = 'Task';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- CalendarEvent
		ELSE IF(@ColumnName IN ('CalendarEventId'))
		BEGIN
			SET @ReferenceTableName = 'CalendarEvent';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- LookupCategory
		ELSE IF(@ColumnName IN ('LookupCategoryId'))
		BEGIN
			SET @ReferenceTableName = 'LookupCategory';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- LookupValue
		ELSE
		BEGIN
			SET @ReferenceTableName = 'LookupValue';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END

		BEGIN TRY
			EXEC('ALTER TABLE [dbo].[' + @TableName + ']  WITH CHECK ADD  CONSTRAINT ' + @ForeignKeyConstraintName + ' FOREIGN KEY([' + @ColumnName + '])
				REFERENCES [dbo].[' + @ReferenceTableName + '] ([_id])');
			EXEC('ALTER TABLE [dbo].[' + @TableName + '] CHECK CONSTRAINT ' + @ForeignKeyConstraintName);
			PRINT ('>> Completed > ADD FOREIGN KEY constraint > Created > ' + @ForeignKeyConstraintName + ' on table [dbo].[' + @TableName + ']');
		END TRY
		BEGIN CATCH
			PRINT ('>> Completed > ADD FOREIGN KEY constraint > Exists > ' + @ForeignKeyConstraintName + ' on table [dbo].[' + @TableName + ']');
		END CATCH

		FETCH NEXT FROM Cursor_Table_ColumnNames INTO @ColumnName;
	END

	CLOSE Cursor_Table_ColumnNames;
	DEALLOCATE Cursor_Table_ColumnNames;

	FETCH NEXT FROM Cursor_Table_Names INTO @TableName;
END

CLOSE Cursor_Table_Names;
DEALLOCATE Cursor_Table_Names;

PRINT ('>> Completed > Creating all FOREIGN KEY constraints');
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Create all *_IsActive, *_DateCreated DEFAULT constraints
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
DECLARE @TableName NVARCHAR(255);
DECLARE @ColumnName NVARCHAR(255);
DECLARE @ColumnDefaultValue NVARCHAR(10) = 'NULL';
DECLARE Cursor_Table_Names CURSOR FOR
	SELECT
		[t].[name]
		,[ac].[name]
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac]
	WHERE
		([t].[object_id] = [ac].[object_id])
		AND ([ac].[name] IN ('IsActive', 'DateCreated'));

OPEN Cursor_Table_Names;
FETCH NEXT FROM Cursor_Table_Names INTO @TableName, @ColumnName;

WHILE(@@FETCH_STATUS = 0)
BEGIN
	-- === Get Column Default Value
	SET @ColumnDefaultValue = CASE WHEN @ColumnName IN ('IsActive') THEN '1' WHEN @ColumnName IN ('DateCreated') THEN 'GETDATE()' ELSE 'NULL' END;
	-- === Add *_IsActive OR *_DateCreated DEFAULT CONSTRAINT
	EXEC('ALTER TABLE [dbo].[' + @TableName + '] ADD CONSTRAINT [DF_' + @TableName + '_' + @ColumnName + ']  DEFAULT (' + @ColumnDefaultValue + ') FOR [' + @ColumnName + ']');
	PRINT ('>> Completed > Add > Default Constraint > [DF_' + @TableName + '_' + @ColumnName + '] on table [dbo].[' + @TableName + ']');

	FETCH NEXT FROM Cursor_Table_Names INTO @TableName, @ColumnName;
END

CLOSE Cursor_Table_Names
DEALLOCATE Cursor_Table_Names

PRINT ('>> Completed > Create > All > *_IsActive DEFAULT constraints');
GO

PRINT ('>> Completed > Create > All > *_DateCreated DEFAULT constraints');
GO

PRINT ('>> Started > Create > Table TRIGGER(s)')
GO

DECLARE @TableName NVARCHAR(255);
DECLARE Cursor_Table_Names CURSOR FOR SELECT [name] FROM [sys].[tables] WHERE [name] NOT IN ('EmployeeSalary', 'Department', 'EntityChangeHistory');

OPEN Cursor_Table_Names;
FETCH NEXT FROM Cursor_Table_Names INTO @TableName;

WHILE(@@FETCH_STATUS = 0)
BEGIN
	-- === Add *_IsActive DEFAULT CONSTRAINT
	EXEC('CREATE TRIGGER [dbo].[trg' + @TableName + ']
	ON [dbo].[' + @TableName + ']
	AFTER INSERT, UPDATE, DELETE
	AS
	BEGIN
		SET NOCOUNT ON;
		DECLARE @TableName [nvarchar](255) = ''' + @TableName + ''';
		DECLARE @UseDeleted [bit] = (SELECT COUNT(*) FROM [deleted]);
		WITH [cte1] AS (
			SELECT
				[i].[_id] AS [InsertedID]
				,[i].[CreatedBy] AS [InsertedCreatedBy]
				,[i].[DateCreated] AS [InsertedDateCreated]
				,[i].[ModifiedBy] AS [InsertedModifiedBy]
				,[i].[DateModified] AS [InsertedDateModified]
				,[d].[_id] AS [DeletedID]
				,[d].[CreatedBy] AS [DeletedCreatedBy]
				,[d].[ModifiedBy] AS [DeletedModifiedBy]
				,[d].[DateModified] AS [DeletedDateModified]
			FROM [deleted] AS [d]
			FULL OUTER HASH JOIN [inserted] AS [i] ON [i].[_id] = [d].[_id]
		), 
		[cte2] AS (
			SELECT
				CASE
					WHEN [InsertedID] IS NOT NULL AND [DeletedID] IS NOT NULL THEN ''Update''
					WHEN [InsertedID] IS NOT NULL AND [DeletedID] IS NULL THEN ''Insert''
					WHEN [InsertedID] IS NULL AND [DeletedID] IS NOT NULL THEN ''Delete''
					ELSE ''Invalid''
				END AS [Operation]
				,''' + @TableName + ''' AS [EntityName]
				,COALESCE([InsertedID], [DeletedID]) AS [id]
				,COALESCE([InsertedCreatedBy], [DeletedCreatedBy]) AS [CreatedBy]
				,[InsertedDateCreated] AS [DateCreated]
				,COALESCE([DeletedModifiedBy], [InsertedModifiedBy]) AS [ModifiedBy]
				,COALESCE([DeletedDateModified], [InsertedDateModified]) AS [DateModified]
			FROM [cte1]
		) 
		INSERT INTO [dbo].[EntityChangeHistory]([Operation],[EntityName],[id],[CurrentValue],[PreviousValue],[CreatedBy],[DateCreated],[ModifiedBy],[DateModified])
		SELECT
			[Operation]
			,[EntityName]
			,[id]
			,(SELECT * FROM [dbo].[' + @TableName + '] WHERE ([_id] = [id]) FOR JSON PATH) AS [CurrentValue]
			,CASE WHEN @UseDeleted <> 0 THEN (SELECT * FROM [deleted] WHERE ([_id] = [id]) FOR JSON PATH) ELSE NULL END AS [PreviousValue]
			,[CreatedBy]
			,[DateCreated]
			,CASE WHEN @UseDeleted <> 0 THEN COALESCE([ModifiedBy], 1) ELSE NULL END AS [ModifiedBy]
			,CASE WHEN @UseDeleted <> 0 THEN COALESCE([DateModified], GETDATE()) ELSE NULL END AS [DateModified]
		FROM [cte2];
	END');
	EXEC('ALTER TABLE [dbo].[' + @TableName + '] ENABLE TRIGGER [trg' + @TableName + ']');
	PRINT ('>> Completed > Create > Table > Trigger > [dbo].[' + @TableName + ']');

	FETCH NEXT FROM Cursor_Table_Names INTO @TableName;
END

CLOSE Cursor_Table_Names
DEALLOCATE Cursor_Table_Names

PRINT ('>> Completed > Create > Table TRIGGER(s)')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Create user functions
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

PRINT ('>> Started > Create > UDF (User Defined Functions)')
GO

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
	DECLARE @Position NVARCHAR(1) = (SELECT UPPER(LEFT([lvpa].[Value], 1)) FROM [dbo].[LookupValue] AS [lvpa] WHERE [lvpa].[_id] = @PositionId);
	DECLARE @EmploymentType NVARCHAR(1) = (SELECT UPPER(LEFT([lvpa].[Value], 1)) FROM [dbo].[LookupValue] AS [lvpa] WHERE [lvpa].[_id] = @EmploymentTypeId);
	DECLARE @EmployeeNumber NVARCHAR(10) = CONCAT(@Position, @EmploymentType, (SELECT [REN] FROM [dbo].[vwRandomEmployeeNumber]));

	WHILE((SELECT COUNT([_id]) FROM [dbo].[Employee] WHERE [EmployeeNumber] LIKE '%' + @EmployeeNumber + '%') <> 0)
	BEGIN
		SET @EmployeeNumber = CONCAT(@Position, @EmploymentType, (SELECT [REN] FROM [dbo].[vwRandomEmployeeNumber]));
	END

    RETURN LTRIM(RTRIM(@EmployeeNumber))
END
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GenerateEmployeeNumber]')
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
PRINT ('>> Completed > Create > UDF > [dbo].[GetSAIdNumberBirthDate]')
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetSAIdNumberGenderId]
-- Description:	Gets the GenderId from the specified SA Id Number
-- Parameters:
-- @SAIdNumber
-- =============================================
CREATE FUNCTION [dbo].[GetSAIdNumberGenderId](@SAIdNumber BIGINT)
RETURNS BIGINT
AS
BEGIN
	DECLARE @GenderMaleOrFemale NVARCHAR(10) = 'Other';
	IF(@SAIdNumber IS NOT NULL AND LEN(@SAIdNumber) = 13)
	BEGIN
		DECLARE @GenderIndicator BIGINT = CAST(SUBSTRING(CAST(@SAIdNumber AS NVARCHAR(13)), 7, 4) AS INT);
		SET @GenderMaleOrFemale = CASE WHEN @GenderIndicator BETWEEN 0 AND 4999 THEN 'Female' WHEN @GenderIndicator BETWEEN 5000 AND 9999 THEN 'Male' ELSE 'Other' END;
	END
    RETURN (SELECT [lv].[_id] FROM [dbo].[LookupValue] AS [lv] ,[dbo].[LookupCategory] AS [lc] WHERE ([lv].[LookupCategoryId] = [lc].[_id]) AND ([lc].[Name] = 'Gender') AND ([lv].[Value] = @GenderMaleOrFemale));
END
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetSAIdNumberGenderId]')
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
RETURNS VARCHAR(MAX)
AS
BEGIN
	DECLARE @KeepValues AS VARCHAR(50);
	SET @KeepValues = '%[^ ][A-Z]%';
	WHILE (PATINDEX(@KeepValues COLLATE LATIN1_GENERAL_BIN, @Value) > 0)
	BEGIN
		SET @Value = STUFF(@Value, PATINDEX(@KeepValues COLLATE LATIN1_GENERAL_BIN, @Value) + 1, 0, ' ');
	END
    RETURN @Value
END
GO
PRINT ('>> Completed > Create > UDF > [dbo].[SplitCamelCase]')
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
    DECLARE @RetValue NVARCHAR(2000);

    SET @Value = RTRIM(LTRIM(@Value));
    SET @RetValue = LEFT(@Value,1);

    WHILE (CHARINDEX(' ', @Value, 1) > 0)
	BEGIN
        SET @Value = LTRIM(RIGHT(@Value, LEN(@Value) - CHARINDEX(' ', @Value, 1)));
        SET @RetValue += LEFT(@Value, 1);
    END

    RETURN @RetValue;
END
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetFirstCharacters]')
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[ValueJoin]
-- Description:	Joins (Concatenates) the specified value(s) using the specified delimiter
-- Parameters:
-- @Delimiter
-- @Value1
-- @Value2
-- @Value3
-- @Value4
-- @Value5
-- @Value6
-- @Value7
-- @Value8
-- @Value9
-- @Value10
-- =============================================
CREATE FUNCTION [dbo].[ValueJoin](
	@Delimiter [nvarchar](255) = '',
	@Value1 [nvarchar](255),
	@Value2 [nvarchar](255),
	@Value3 [nvarchar](255) = NULL,
	@Value4 [nvarchar](255) = NULL,
	@Value5 [nvarchar](255) = NULL,
	@Value6 [nvarchar](255) = NULL,
	@Value7 [nvarchar](255) = NULL,
	@Value8 [nvarchar](255) = NULL,
	@Value9 [nvarchar](255) = NULL,
	@Value10 [nvarchar](255) = NULL
)
RETURNS NVARCHAR(MAX)
AS
BEGIN
    DECLARE @RetValue NVARCHAR(MAX) = '';

	;WITH [cte] AS (
	SELECT @Value1 [value] UNION ALL
	SELECT @Value2 [value] UNION ALL
	SELECT @Value3 [value] UNION ALL
	SELECT @Value4 [value] UNION ALL
	SELECT @Value5 [value] UNION ALL
	SELECT @Value6 [value] UNION ALL
	SELECT @Value7 [value] UNION ALL
	SELECT @Value8 [value] UNION ALL
	SELECT @Value9 [value] UNION ALL
	SELECT @Value10 [value]
	)
	SELECT
		@RetValue += CONCAT(LTRIM(RTRIM([value])), @Delimiter)
	FROM [cte]
	WHERE
		([value] IS NOT NULL)
		
	RETURN CASE WHEN LEN(LTRIM(RTRIM((ISNULL(@RetValue, ''))))) <> 0 THEN @RetValue ELSE NULL END;
END
GO
PRINT ('>> Completed > Create > UDF > [dbo].[ValueJoin]')
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetUserProfile]
-- Description:	Fetches the User Profile of the specified @UID
-- Parameters:
-- @EmailAddress
-- @_id
-- @EmployeeId
-- @ClientId
-- @SupplierId
-- =============================================
CREATE FUNCTION [dbo].[GetUserProfile]
(
	@EmailAddress NVARCHAR(320),
	@_id [bigint] = NULL,
	@EmployeeId [bigint] = NULL,
	@ClientId [bigint] = NULL,
	@SupplierId [bigint] = NULL
)
RETURNS NVARCHAR(MAX)
AS
BEGIN
	DECLARE @UserProfile NVARCHAR(MAX) = (
		SELECT
			[u].[_id] AS 'User._id'
			,[u].[EmployeeId] AS 'User.EmployeeId'
			,[u].[ClientId] AS 'User.ClientId'
			,[u].[SupplierId] AS 'User.SupplierId'
			,[u].[EmailAddress] AS 'User.EmailAddress'
			,[u].[UserTypeId] AS 'User.UserTypeId'
			,[u].[IsAdmin] AS 'User.IsAdmin'
			,[u].[IsLocked] AS 'User.IsLocked'
			,[u].[Avatar] AS 'User.Avatar'
			,[u].[DateLastLoggedIn] AS 'User.DateLastLoggedIn'
			,[u].[SessionToken] AS 'User.SessionToken'
			,LTRIM(RTRIM(COALESCE((SELECT [dbo].[ValueJoin](' ', [e].[Name], [e].[MiddleName], [e].[Surname], NULL, NULL, NULL, NULL, NULL, NULL, NULL)), (SELECT [dbo].[ValueJoin](' ', [c].[Name], COALESCE([c].[Surname], [c].[CompanyName], [c].[RegistrationNumber]), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)), (SELECT [dbo].[ValueJoin](' ', [s].[Name], COALESCE([s].[Surname], [s].[CompanyName], [s].[RegistrationNumber]), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)), [u].[EmailAddress]))) AS 'User.DisplayName'
			,[u].[IsActive] AS 'User.IsActive'
			,[u].[CreatedBy] AS 'User.CreatedBy'
			,[u].[DateCreated] AS 'User.DateCreated'
			,[u].[ModifiedBy] AS 'User.ModifiedBy'
			,[u].[DateModified] AS 'User.DateModified'
			,[e].[_id] AS 'Employee._id'
			,[e].[SalutationId] AS 'Employee.SalutationId'
			,[e].[Name] AS 'Employee.Name'
			,[e].[MiddleName] AS 'Employee.MiddleName'
			,[e].[Surname] AS 'Employee.Surname'
			,[e].[IdNumber] AS 'Employee.IdNumber'
			,[e].[BirthDate] AS 'Employee.BirthDate'
			,[e].[GenderId] AS 'Employee.GenderId'
			,[e].[EmploymentTypeId] AS 'Employee.EmploymentTypeId'
			,[e].[PositionId] AS 'Employee.PositionId'
			,[e].[DepartmentId] AS 'Employee.DepartmentId'
			,[e].[ManagerId] AS 'Employee.ManagerId'
			,[e].[DateHired] AS 'Employee.DateHired'
			,[e].[EmployeeNumber] AS 'Employee.EmployeeNumber'
			,[e].[IsTerminated] AS 'Employee.IsTerminated'
			,[e].[DateTerminated] AS 'Employee.DateTerminated'
			,LTRIM(RTRIM((SELECT [dbo].[ValueJoin](' ', [e].[Name], [e].[MiddleName], [e].[Surname], NULL, NULL, NULL, NULL, NULL, NULL, NULL)))) AS 'Employee.DisplayName'
			,[e].[IsActive] AS 'Employee.IsActive'
			,[e].[CreatedBy] AS 'Employee.CreatedBy'
			,[e].[DateCreated] AS 'Employee.DateCreated'
			,[e].[ModifiedBy] AS 'Employee.ModifiedBy'
			,[e].[DateModified] AS 'Employee.DateModified'
			,[c].[_id] AS 'Client._id'
			,[c].[SalutationId] AS 'Client.SalutationId'
			,[c].[Name] AS 'Client.Name'
			,[c].[Surname] AS 'Client.Surname'
			,[c].[CompanyName] AS 'Client.CompanyName'
			,[c].[IndustryTypeId] AS 'Client.IndustryTypeId'
			,[c].[IdNumber] AS 'Client.IdNumber'
			,[c].[RegistrationNumber] AS 'Client.RegistrationNumber'
			,[c].[VATNumber] AS 'Client.VATNumber'
			,LTRIM(RTRIM((SELECT [dbo].[ValueJoin](' ', [c].[Name], COALESCE([c].[Surname], [c].[CompanyName], [c].[RegistrationNumber]), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)))) AS 'Client.DisplayName'
			,[c].[IsActive] AS 'Client.IsActive'
			,[c].[CreatedBy] AS 'Client.CreatedBy'
			,[c].[DateCreated] AS 'Client.DateCreated'
			,[c].[ModifiedBy] AS 'Client.ModifiedBy'
			,[c].[DateModified] AS 'Client.DateModified'
			,[s].[_id] AS 'Supplier._id'
			,[s].[SalutationId] AS 'Supplier.SalutationId'
			,[s].[Name] AS 'Supplier.Name'
			,[s].[Surname] AS 'Supplier.Surname'
			,[s].[CompanyName] AS 'Supplier.CompanyName'
			,[s].[IndustryTypeId] AS 'Supplier.IndustryTypeId'
			,[s].[IdNumber] AS 'Supplier.IdNumber'
			,[s].[RegistrationNumber] AS 'Supplier.RegistrationNumber'
			,LTRIM(RTRIM((SELECT [dbo].[ValueJoin](' ', [s].[Name], COALESCE([s].[Surname], [s].[CompanyName], [s].[RegistrationNumber]), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)))) AS 'Supplier.DisplayName'
			,[s].[VATNumber] AS 'Supplier.VATNumber'
			,[s].[BankId] AS 'Supplier.BankId'
			,[s].[AccountNumber] AS 'Supplier.AccountNumber'
			,[s].[IsActive] AS 'Supplier.IsActive'
			,[s].[CreatedBy] AS 'Supplier.CreatedBy'
			,[s].[DateCreated] AS 'Supplier.DateCreated'
			,[s].[ModifiedBy] AS 'Supplier.ModifiedBy'
			,[s].[DateModified] AS 'Supplier.DateModified'
			,[cd].[_id] AS 'ContactDetail._id'
			,[cd].[EmployeeId] AS 'ContactDetail.EmployeeId'
			,[cd].[ClientId] AS 'ContactDetail.ClientId'
			,[cd].[SupplierId] AS 'ContactDetail.SupplierId'
			,[cd].[RecipientsName] AS 'ContactDetail.RecipientsName'
			,[cd].[EmailAddress] AS 'ContactDetail.EmailAddress'
			,[cd].[HomeTelephoneNumber] AS 'ContactDetail.HomeTelephoneNumber'
			,[cd].[OfficeTelephoneNumber] AS 'ContactDetail.OfficeTelephoneNumber'
			,[cd].[MobileTelephoneNumber] AS 'ContactDetail.MobileTelephoneNumber'
			,[cd].[Website] AS 'ContactDetail.Website'
			,[cd].[AddressLine1] AS 'ContactDetail.AddressLine1'
			,[cd].[AddressLine2] AS 'ContactDetail.AddressLine2'
			,[cd].[City] AS 'ContactDetail.City'
			,[cd].[ProvinceId] AS 'ContactDetail.ProvinceId'
			,[cd].[PostalCode] AS 'ContactDetail.PostalCode'
			,[cd].[CountryId] AS 'ContactDetail.CountryId'
			,[cd].[PreferredLanguageId] AS 'ContactDetail.PreferredLanguageId'
			,[cd].[UseEmailAddress] AS 'ContactDetail.UseEmailAddress'
			,[cd].[UseHomeTelephoneNumber] AS 'ContactDetail.UseHomeTelephoneNumber'
			,[cd].[UseOfficeTelephoneNumber] AS 'ContactDetail.UseOfficeTelephoneNumber'
			,[cd].[UseMobileTelephoneNumber] AS 'ContactDetail.UseMobileTelephoneNumber'
			,[cd].[UsePostalAddress] AS 'ContactDetail.UsePostalAddress'
			,[cd].[IsActive] AS 'ContactDetail.IsActive'
			,[cd].[CreatedBy] AS 'ContactDetail.CreatedBy'
			,[cd].[DateCreated] AS 'ContactDetail.DateCreated'
			,[cd].[ModifiedBy] AS 'ContactDetail.ModifiedBy'
			,[cd].[DateModified] AS 'ContactDetail.DateModified'
			,[ug].[_id] AS 'UserGroup._id'
			,[ug].[UserId] AS 'UserGroup.UserId'
			,[ug].[GroupId] AS 'UserGroup.GroupId'
			,[ug].[IsActive] AS 'UserGroup.IsActive'
			,[ug].[CreatedBy] AS 'UserGroup.CreatedBy'
			,[ug].[DateCreated] AS 'UserGroup.DateCreated'
			,[ug].[ModifiedBy] AS 'UserGroup.ModifiedBy'
			,[ug].[DateModified] AS 'UserGroup.DateModified'
			,(
				SELECT DISTINCT
					[mi].[_id]
					,[mi].[Title]
					,[mi].[Path]
					,[mi].[Image]
					,[mi].[Icon]
					,[mi].[Component]
					,[mi].[Configuration]
					,[mi].[CssClass]	
				FROM [dbo].[MenuItem] AS [mi]
				LEFT JOIN [dbo].[GroupMenuItem] AS [gmi] ON ([mi].[_id] = [gmi].[MenuItemId])
				LEFT JOIN [dbo].[UserTypeMenuItem] AS [utmi] ON ([mi].[_id] = [utmi].[MenuItemId])
				WHERE
					([ug].[GroupId] = [gmi].[GroupId])
					OR ([u].[UserTypeId] = [utmi].[UserTypeId])
				ORDER BY
					[mi].[_id]
				FOR JSON PATH
			) AS [MenuItems]
		FROM [dbo].[User] AS [u]
		LEFT JOIN [dbo].[Employee] AS [e] ON ([u].[EmployeeId] = [e].[_id])
		LEFT JOIN [dbo].[Client] AS [c] ON ([u].[ClientId] = [c].[_id])
		LEFT JOIN [dbo].[Supplier] AS [s] ON ([u].[SupplierId] = [s].[_id])
		LEFT JOIN [dbo].[ContactDetail] AS [cd] ON (
			([e].[_id] = [cd].[EmployeeId])
			OR ([c].[_id] = [cd].[ClientId])
			OR ([s].[_id] = [cd].[SupplierId])
		)
		LEFT JOIN [dbo].[UserGroup] AS [ug] ON (([u].[_id] = [ug].[UserId]))
		WHERE
			([u].[EmailAddress] = @EmailAddress)
			AND (@_id IS NULL OR [u].[_id] = @_id)
			AND (@EmployeeId IS NULL OR [u].[EmployeeId] = @EmployeeId)
			AND (@ClientId IS NULL OR [u].[ClientId] = @ClientId)
			AND (@SupplierId IS NULL OR [u].[SupplierId] = @SupplierId)
		FOR JSON PATH, ROOT('UserProfile')
	)
	RETURN @UserProfile
END
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetUserProfile]')
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
	WITH [cte] ([_id], [EmployeeClientSupplierId], [UserTypeId], [EmailAddress], [PasswordHash], [IsAdmin], [IsActive], [IsLocked], [DateLastLoggedIn], [CreatedBy], [DateCreated], [ModifiedBy], [DateModified]) AS (
	SELECT
		[_id]
		, COALESCE([EmployeeId], [ClientId], [SupplierId]) AS [EmployeeClientSupplierId]
		, CASE
			WHEN [EmailAddress] = 'root@genio.idas.co.za' THEN 'Root'
			WHEN [EmailAddress] = 'admin@genio.idas.co.za' THEN 'Admin'
			WHEN [EmployeeId] IS NOT NULL THEN 'Employee'
			WHEN [ClientId] IS NOT NULL THEN 'Client'
			WHEN [SupplierId] IS NOT NULL THEN 'Supplier'
			ELSE 'General' END AS [UserTypeId]
		, [EmailAddress]
		, [PasswordHash]
		, [IsAdmin]
		, [IsActive]
		, [IsLocked]
		, [DateLastLoggedIn]
		, [CreatedBy]
		, [DateCreated]
		, [ModifiedBy]
		, [DateModified]
	FROM [dbo].[User]
	)
	SELECT
		[_id] AS [UserId]
		, [EmployeeClientSupplierId]
		, (SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'UserType' AND [lvpa].[Value] = [cte].[UserTypeId]) AS [UserTypeId]
		, [EmailAddress]
		, [PasswordHash]
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
PRINT ('>> Completed > Create > UDF > [dbo].[GetAllUsers]')
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
	FROM [dbo].[GetAllUsers]()
	WHERE
		(@UserId IS NULL OR [UserId] = @UserId)
		AND (@EmailAddress IS NULL OR [EmailAddress] = @EmailAddress)
		AND (@EmployeeClientSupplierId IS NULL OR [EmployeeClientSupplierId] = @EmployeeClientSupplierId)
		AND (@UserTypeId IS NULL OR [UserTypeId] = @UserTypeId)
)
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetUserBy]')
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
		[lvpa].[Value] AS [GroupName]
	FROM [dbo].[User] AS [u]
	JOIN [dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [dbo].[LookupValue] AS [lvpa] ON [ug].[GroupId] = [lvpa].[_id]
	WHERE
		[u].[EmailAddress] = @EmailAddress
)
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetUserGroupsByEmailAddress]')
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
		[lvpa].[Value] AS [GroupName]
	FROM [dbo].[User] AS [u]
	JOIN [dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [dbo].[LookupValue] AS [lvpa] ON [ug].[GroupId] = [lvpa].[_id]
	WHERE
		[u].[_id] = @UserId
)
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetUserGroupsByUserId]')
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
		,[mi].[CssClass]
	FROM [dbo].[User] AS [u]
	JOIN [dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [dbo].[GroupMenuItem] AS [gmi] ON [ug].[GroupId] = [gmi].[GroupId]
	JOIN [dbo].[LookupValue] AS [lvpa] ON [gmi].[GroupId] = [lvpa].[_id]
	JOIN [dbo].[MenuItem] AS [mi] ON [gmi].[MenuItemId] = [mi].[_id]
	WHERE
		[u].[EmailAddress] = @EmailAddress
)
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetUserGroupMenuItemsByEmailAddress]')
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
		,[mi].[CssClass]
	FROM [dbo].[User] AS [u]
	JOIN [dbo].[UserGroup] AS [ug] ON [u].[_id] = [ug].[UserId]
	JOIN [dbo].[GroupMenuItem] AS [gmi] ON [ug].[GroupId] = [gmi].[GroupId]
	JOIN [dbo].[LookupValue] AS [lvpa] ON [gmi].[GroupId] = [lvpa].[_id]
	JOIN [dbo].[MenuItem] AS [mi] ON [gmi].[MenuItemId] = [mi].[_id]
	WHERE
		[u].[_id] = @UserId
)
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetUserGroupMenuItemsByUserId]')
GO

-- =============================================
-- Author:		TS MOGANO
-- Create date: 02/03/2021
-- Function Name: [dbo].[GetDatabaseObjectParameters]
-- Description:	Fetches the parameter(s) for the specified database schema and object name
-- Parameters:
--	@SchemaName
--	@ObjectName
-- =============================================
CREATE FUNCTION [dbo].[GetDatabaseObjectParameters]
(	
	@SchemaName [nvarchar](255)
	, @ObjectName [nvarchar](255)
)
RETURNS TABLE
AS
RETURN (
	SELECT
		[parameter_id] AS [ParameterOrderId]
		,LTRIM(RTRIM(REPLACE([name], '@', ''))) AS [ParameterName]
		,type_name(user_type_id) AS [DataType]
		,[max_length] AS [DataLength]
		,CASE
			WHEN TYPE_NAME(system_type_id) = 'uniqueidentifier'
				THEN [precision]
			ELSE ODBCPREC([system_type_id], [max_length], [precision])
			END AS [DataPrecision]
		,ODBCSCALE([system_type_id], [scale]) AS [DataScale]
		,CONVERT([sysname], 
			CASE
				WHEN system_type_id in (35, 99, 167, 175, 231, 239)
					THEN SERVERPROPERTY('collation') END) AS [DataCollation]
	FROM sys.parameters WHERE [object_id] = OBJECT_ID('[' + @SchemaName + '].[' + @ObjectName + ']')
)
GO
PRINT ('>> Completed > Create > UDF > [dbo].[GetDatabaseObjectParameters]')
GO

PRINT ('>> Completed > Create > UDF (User Defined Functions)')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Create store procedures
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------

DECLARE @TableName NVARCHAR(255);
DECLARE @StoredProcedureName NVARCHAR(255);
DECLARE @StoredProcedureCreateOrInsertParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureCreateOrInsertColumnNames NVARCHAR(MAX) = '';
DECLARE @StoredProcedureCreateOrInsertValueParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectColumnNames NVARCHAR(MAX) = '';
DECLARE @StoredProcedureFetchOrSelectWhereParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureEditOrUpdateParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureEditOrUpdateColumnNames NVARCHAR(MAX) = '';
DECLARE @StoredProcedureArchiveOrDeleteParameters NVARCHAR(MAX) = '';
DECLARE @StoredProcedureArchiveOrDeleteColumnNames NVARCHAR(MAX) = '';
DECLARE @ExecQuery NVARCHAR(MAX) = '';
DECLARE Cursor_Table_Names CURSOR FOR
	SELECT [Name] FROM [sys].[tables]

OPEN Cursor_Table_Names;
FETCH NEXT FROM Cursor_Table_Names INTO @TableName

WHILE(@@FETCH_STATUS = 0)
BEGIN
	-- === Setup: Create (INSERT) store procedure
	SELECT
		@StoredProcedureCreateOrInsertParameters += CASE
			WHEN [ac].[name] NOT IN ('_id', 'BirthDate', 'GenderId', 'EmployeeNumber', 'IsTerminated', 'DateTerminated', 'IsActive', 'DateLastLoggedIn', 'DateCreated', 'ModifiedBy', 'DateModified')
				THEN CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
					CASE
						WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
							THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
						ELSE ''
					END + ',' + CHAR(13)
				ELSE ''
			END,
		@StoredProcedureCreateOrInsertColumnNames += CASE
			WHEN [ac].[name] NOT IN ('_id', 'IsTerminated', 'DateTerminated', 'IsActive', 'DateLastLoggedIn', 'DateCreated', 'ModifiedBy', 'DateModified')
				THEN '[' + [ac].[name] + '], '
				ELSE ''
			END,
		@StoredProcedureCreateOrInsertValueParameters += CASE
			WHEN [ac].[name] NOT IN ('_id', 'IsTerminated', 'DateTerminated', 'IsActive', 'DateLastLoggedIn', 'DateCreated', 'ModifiedBy', 'DateModified')
				THEN CHAR(9) + CHAR(9) + '@' + [ac].[name] + ',' + CHAR(13)
				ELSE ''
			END
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ac].[is_computed] = 0)
		AND ([ty].[name] NOT IN('sysname'))
	ORDER BY
		[ac].[column_id]

	SET @StoredProcedureCreateOrInsertParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureCreateOrInsertParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureCreateOrInsertParameters))) - 2)));
	SET @StoredProcedureCreateOrInsertColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureCreateOrInsertColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureCreateOrInsertColumnNames))) - 1)));
	SET @StoredProcedureCreateOrInsertValueParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureCreateOrInsertValueParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureCreateOrInsertValueParameters))) - 2)));
	
	SET @StoredProcedureName = N'[dbo].[spCreateOrInsert_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Create (INSERT) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureCreateOrInsertParameters

	IF(@TableName IN ('Task'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + ',@AssigneeId [bigint] = NULL'
		SET @ExecQuery += CHAR(13) + CHAR(9) + ',@StatusId [bigint] = NULL'
	END

	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'

	IF(@TableName IN ('Employee'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'DECLARE @BirthDate [date] = (SELECT [dbo].[GetSAIdNumberBirthDate](@IdNumber));'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'DECLARE @GenderId [bigint] = (SELECT [dbo].[GetSAIdNumberGenderId](@IdNumber));'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'DECLARE @EmployeeNumber [nvarchar](255) = (SELECT [dbo].[GenerateEmployeeNumber](@PositionId, @EmploymentTypeId));'
	END

	IF(@TableName IN ('Project'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET @Code = LTRIM(RTRIM((SELECT [dbo].[GetFirstCharacters]((SELECT [dbo].[SplitCamelCase](@Name))))));'
	END

	SET @ExecQuery += CHAR(13) + CHAR(9) + 'INSERT INTO [dbo].[' + @TableName + '](' + @StoredProcedureCreateOrInsertColumnNames + ')'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'VALUES ('
	SET @ExecQuery += CHAR(13) + @StoredProcedureCreateOrInsertValueParameters
	SET @ExecQuery += CHAR(13) + CHAR(9) + ');'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'DECLARE @_id [bigint] = SCOPE_IDENTITY();'

	IF(@TableName IN ('Project'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'DECLARE @StatusId [bigint] = (SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = ''Status'' AND [lvpa].[Value] = ''Created'');'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'EXEC [dbo].[spCreateOrInsert_' + @TableName + 'Status] @_id, @StatusId, @CreatedBy;'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET @StatusId = (SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = ''Status'' AND [lvpa].[Value] = ''Not Started'');'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'EXEC [dbo].[spCreateOrInsert_' + @TableName + 'Status] @_id, @StatusId, @CreatedBy;'
	END

	IF(@TableName IN ('Task'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET @StatusId = ISNULL(@StatusId, (SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = ''Status'' AND [lvpa].[Value] = ''Created''));'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'EXEC [dbo].[spCreateOrInsert_' + @TableName + 'Status] @_id, @StatusId, @CreatedBy;'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'IF(@AssigneeId IS NOT NULL)'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'BEGIN'
		SET @ExecQuery += CHAR(13) + CHAR(9) + CHAR(9) + 'EXEC [dbo].[spCreateOrInsert_' + @TableName + 'Assignment] @_id, @AssigneeId, @CreatedBy;'
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'END'
	END


	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SELECT * FROM [dbo].[' + @TableName + '] WHERE [_id] = @_id;'
	SET @ExecQuery += CHAR(13) + 'END';	

	IF (OBJECT_ID(@StoredProcedureName, 'P') IS NOT NULL)
	BEGIN
		EXEC ('DROP PROCEDURE ' + @StoredProcedureName);
		PRINT ('>> Completed > Drop procedure ' + @StoredProcedureName + ', successful');
	END

	EXEC ( @ExecQuery );
	PRINT ('>> Completed > Create procedure ' + @StoredProcedureName + ', successful');

	-- === Setup: Fetch (SELECT) store procedure
	SELECT
		@StoredProcedureFetchOrSelectParameters += CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
			CASE
				WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
					THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
				ELSE ''
			END + ' = NULL,' + CHAR(13),
		@StoredProcedureFetchOrSelectColumnNames += CHAR(9) + CHAR(9) + '[t].[' + [ac].[name] + '],' + CHAR(13),
		@StoredProcedureFetchOrSelectWhereParameters += CHAR(9) + CHAR(9) + 
		CASE
			WHEN [ac].[column_id] <> 1
				THEN 'AND (@' + [ac].[name] + ' IS NULL OR [t].[' + [ac].[name] + '] = @' + [ac].[name] + ')'
			ELSE '(@' + [ac].[name] + ' IS NULL OR [t].[' + [ac].[name] + '] = @' + [ac].[name] + ')'
		END + CHAR(13)
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ty].[name] NOT IN('sysname'))
	ORDER BY
		[ac].[column_id]

	SET @StoredProcedureFetchOrSelectParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureFetchOrSelectParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureFetchOrSelectParameters))) - 2)));
	SET @StoredProcedureFetchOrSelectColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureFetchOrSelectColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureFetchOrSelectColumnNames))) - 2)));
	SET @StoredProcedureFetchOrSelectWhereParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureFetchOrSelectWhereParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureFetchOrSelectWhereParameters))) - 1)));
	
	SET @StoredProcedureName = N'[dbo].[spFetchOrSelect_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Fetch (SELECT) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureFetchOrSelectParameters

	IF(@TableName IN ('LookupValue'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + ', @LookupCategoryName [nvarchar](255) = NULL'
	END

	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SELECT'
	SET @ExecQuery += CHAR(13) + @StoredProcedureFetchOrSelectColumnNames
	
	IF(@TableName IN ('User'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + ', [t].[_id] AS [UserId]'
		SET @ExecQuery += CHAR(13) + CHAR(9) + ', COALESCE([t].[EmployeeId], [t].[ClientId], [t].[SupplierId]) AS [EmployeeClientSupplierId]'
	END
	
	IF(@TableName IN ('Task'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + ',(SELECT TOP 1 [AssigneeId] FROM [dbo].[' + @TableName + 'Assignment] AS [tska] WHERE [' + @TableName + 'Id] = [t].[_id] ORDER BY [tska].[DateCreated] DESC) AS [AssigneeId]'
	END
	
	IF(@TableName IN ('Project', 'Task'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + ',(SELECT TOP 1 [StatusId] FROM [dbo].[' + @TableName + 'Status] AS [sts] WHERE [' + @TableName + 'Id] = [t].[_id] ORDER BY [sts].[DateCreated] DESC) AS [StatusId]'
		SET @ExecQuery += CHAR(13) + CHAR(9) + ',CONCAT(''#/'',''' + LOWER(@TableName) + 's'', ''/'',''' + LOWER(@TableName) + ''', ''/'', [t].[_id]) AS [RouterLink]'
	END
	
	IF(@TableName IN ('FileAttachment'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + ',CONCAT(''#/secure/attachment/'', ISNULL(CAST([t].[ProjectId] AS VARCHAR(MAX)) + ''/'', ''''), ISNULL(CAST([t].[TaskId] AS VARCHAR(MAX)) + ''/'', ''''), [t].[_id], '''') AS [RouterLink]'
	END
	
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'FROM [dbo].[' + @TableName + '] AS [t]'
	IF(@TableName IN ('LookupValue'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + 'JOIN [dbo].[LookupCategory] AS [lc] ON ([t].[LookupCategoryId] = [lc].[_id])'
	END
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'WHERE'
	SET @ExecQuery += CHAR(13) + @StoredProcedureFetchOrSelectWhereParameters
	IF(@TableName IN ('LookupValue'))
	BEGIN
		SET @ExecQuery += CHAR(13) + CHAR(9) + CHAR(9) + 'AND (@LookupCategoryName IS NULL OR [lc].[Name] = @LookupCategoryName)'
	END
	SET @ExecQuery += CHAR(13) + 'END';	

	IF (OBJECT_ID(@StoredProcedureName, 'P') IS NOT NULL)
	BEGIN
		EXEC ('DROP PROCEDURE ' + @StoredProcedureName);
		PRINT ('>> Completed > Drop procedure ' + @StoredProcedureName + ', successful');
	END

	EXEC ( @ExecQuery );
	PRINT ('>> Completed > Create procedure ' + @StoredProcedureName + ', successful');

	-- === Setup: Edit (UPDATE) store procedure
	SET @StoredProcedureEditOrUpdateParameters += CHAR(9) + '@_id [bigint],' + CHAR(13);
	SET @StoredProcedureEditOrUpdateParameters += CHAR(9) + '@ModifiedBy [bigint],' + CHAR(13);
	SELECT
		@StoredProcedureEditOrUpdateParameters += CASE
			WHEN [ac].[name] NOT IN ('_id', 'CreatedBy', 'DateCreated', 'DateModified', 'ModifiedBy')
				THEN CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
					CASE
						WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
							THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
						ELSE ''
					END + CASE WHEN [ac].[name] NOT IN ('_id', 'ModifiedBy') THEN ' = NULL' ELSE '' END + ',' + CHAR(13)
				ELSE ''
			END,
		@StoredProcedureEditOrUpdateColumnNames += CASE
			WHEN [ac].[name] NOT IN ('_id', 'CreatedBy', 'DateCreated')
				THEN CHAR(9) + CHAR(9) + '[' + [ac].[name] + '] = ' + 
					CASE
						WHEN [ac].[name] IN ('DateModified')
							THEN 'GETDATE()'
						ELSE '@' + [ac].[name]
					END + ',' + CHAR(13)
				ELSE ''
			END
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ac].[is_computed] = 0)
		AND ([ty].[name] NOT IN('sysname'))
	ORDER BY
		[ac].[column_id]

	SET @StoredProcedureEditOrUpdateParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureEditOrUpdateParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureEditOrUpdateParameters))) - 2)));
	SET @StoredProcedureEditOrUpdateColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureEditOrUpdateColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureEditOrUpdateColumnNames))) - 2)));
	
	SET @StoredProcedureName = N'[dbo].[spEditOrUpdate_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Edit (UPDATE) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureEditOrUpdateParameters
	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'UPDATE [dbo].[' + @TableName + ']'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET'
	SET @ExecQuery += CHAR(13) + @StoredProcedureEditOrUpdateColumnNames
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'WHERE'
	SET @ExecQuery += CHAR(13) + CHAR(9) + CHAR(9) + '[_id] = @_id;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SELECT * FROM [dbo].[' + @TableName + '] WHERE [_id] = @_id;'
	SET @ExecQuery += CHAR(13) + 'END';	

	IF (OBJECT_ID(@StoredProcedureName, 'P') IS NOT NULL)
	BEGIN
		EXEC ('DROP PROCEDURE ' + @StoredProcedureName);
		PRINT ('>> Completed > Drop procedure ' + @StoredProcedureName + ', successful');
	END

	EXEC ( @ExecQuery );
	PRINT ('>> Completed > Create procedure ' + @StoredProcedureName + ', successful');

	-- === Setup: Archive (DELETE) store procedure
	SELECT
		@StoredProcedureArchiveOrDeleteParameters += CASE
			WHEN [ac].[name] IN ('_id', 'ModifiedBy')
				THEN CHAR(9) + '@' + [ac].[name] + ' [' + [ty].[name] + ']' +
					CASE
						WHEN [ty].[name] IN ('char', 'varchar', 'nchar', 'nvarchar', 'text', 'ntext')
							THEN '(' + CASE WHEN [ac].[max_length] < 0 THEN 'MAX' ELSE CAST([ac].[max_length] AS NVARCHAR(MAX)) END + ')'
						ELSE ''
					END + ',' + CHAR(13)
				ELSE ''
			END,
		@StoredProcedureArchiveOrDeleteColumnNames += CASE
			WHEN [ac].[name] IN ('IsActive', 'ModifiedBy', 'DateModified')
				THEN CHAR(9) + CHAR(9) + '[' + [ac].[name] + '] = ' + 
					CASE
						WHEN [ac].[name] IN ('DateModified')
							THEN 'GETDATE()'
						WHEN [ac].[name] IN ('IsActive')
							THEN '0'
						ELSE '@' + [ac].[name]
					END + ',' + CHAR(13)
				ELSE ''
			END
	FROM [sys].[tables] AS [t], [sys].[all_columns] AS [ac], [sys].[types] AS [ty]
	WHERE
		([t].[name] = @TableName)
		AND ([t].[object_id] = [ac].[object_id])
		AND ([ac].[system_type_id] = [ty].[system_type_id])
		AND ([ac].[name] IN ('_id', 'IsActive', 'ModifiedBy', 'DateModified'))
		AND ([ac].[is_computed] = 0)
		AND ([ty].[name] NOT IN('sysname'))
	ORDER BY
		[ac].[column_id]

	SET @StoredProcedureArchiveOrDeleteParameters = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteParameters)), 1, LEN(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteParameters))) - 2)));
	SET @StoredProcedureArchiveOrDeleteColumnNames = LTRIM(RTRIM(SUBSTRING(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteColumnNames)), 1, LEN(LTRIM(RTRIM(@StoredProcedureArchiveOrDeleteColumnNames))) - 2)));
	
	SET @StoredProcedureName = N'[dbo].[spArchiveOrDelete_' + @TableName + ']';
	SET @ExecQuery = CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + '-- Author:		Thabang Mogano'
	SET @ExecQuery += CHAR(13) + '-- Create date: ' + (SELECT CONVERT(VARCHAR, GETDATE(), 23))
	SET @ExecQuery += CHAR(13) + '-- Description:	[dbo].[' + @TableName + '] table Archive (DELETE) stored procedure'
	SET @ExecQuery += CHAR(13) + '-- ======================================================================================================================'
	SET @ExecQuery += CHAR(13) + 'CREATE PROCEDURE ' + @StoredProcedureName
	SET @ExecQuery += CHAR(13) + '('
	SET @ExecQuery += CHAR(13) + @StoredProcedureArchiveOrDeleteParameters
	SET @ExecQuery += CHAR(13) + ')'
	SET @ExecQuery += CHAR(13) + 'AS'
	SET @ExecQuery += CHAR(13) + 'BEGIN'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET NOCOUNT ON;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'UPDATE [dbo].[' + @TableName + ']'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SET'
	SET @ExecQuery += CHAR(13) + @StoredProcedureArchiveOrDeleteColumnNames
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'WHERE'
	SET @ExecQuery += CHAR(13) + CHAR(9) + CHAR(9) + '[_id] = @_id;'
	SET @ExecQuery += CHAR(13) + CHAR(9) + 'SELECT * FROM [dbo].[' + @TableName + '] WHERE [_id] = @_id;'
	SET @ExecQuery += CHAR(13) + 'END';	

	IF (OBJECT_ID(@StoredProcedureName, 'P') IS NOT NULL)
	BEGIN
		EXEC ('DROP PROCEDURE ' + @StoredProcedureName);
		PRINT ('>> Completed > Drop procedure ' + @StoredProcedureName + ', successful');
	END

	EXEC ( @ExecQuery );
	PRINT ('>> Completed > Create procedure ' + @StoredProcedureName + ', successful');
	
	-- === Reset
	SET @StoredProcedureCreateOrInsertParameters = '';
	SET @StoredProcedureCreateOrInsertColumnNames = '';
	SET @StoredProcedureCreateOrInsertValueParameters = '';
	SET @StoredProcedureFetchOrSelectParameters = '';
	SET @StoredProcedureFetchOrSelectColumnNames = '';
	SET @StoredProcedureFetchOrSelectWhereParameters = '';
	SET @StoredProcedureEditOrUpdateParameters = '';
	SET @StoredProcedureEditOrUpdateColumnNames = '';
	SET @StoredProcedureArchiveOrDeleteParameters = '';
	SET @StoredProcedureArchiveOrDeleteColumnNames = '';
	SET @ExecQuery = '';

	-- === Fetch (Get) next Table name to process
	FETCH NEXT FROM Cursor_Table_Names INTO @TableName
END

CLOSE Cursor_Table_Names
DEALLOCATE Cursor_Table_Names

PRINT ('>> Completed > Create store procedures')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- Creating/Adding default data
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
PRINT ('>> Started > INSERT >> Default Data')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> Root (Super) and Admin user ([dbo].[User])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT [dbo].[User] ([EmailAddress],[PasswordHash],[IsAdmin],[IsLocked],[Avatar],[CreatedBy])
SELECT
	[EmailAddress]
	,[PasswordHash]
	,[IsAdmin]
	,[IsLocked]
	,[Avatar]
	,1 AS [CreatedBy]
FROM (
SELECT 'root@genio.idas.co.za' AS [EmailAddress], '3b9a10e881e7329cfa4e478615fce90c/d4441ad5f5def0f519ee3b669e521ea40c0291522c26484cfdb3a6a8081e4d239633b183adbc208fa5e4fce4eaa049a9cd453f465586e92dff52ffa8ebc29e74' AS [PasswordHash], 1 AS [IsAdmin], 0 AS [IsLocked], './assets/img/avatars/avatar-16.png' AS [Avatar] UNION
SELECT 'admin@genio.idas.co.za' AS [EmailAddress], '66c7ba6b2e0c67e2c88bd054334996e0/fc5d35d618c0a2b71a9a9a9719962b9b17ebae00516de2304ea72a160aef742d812cf169c154722659ffe3d0e49e085b365af7a8e4442ed77bf5a74992f0e2b4' AS [PasswordHash], 1 AS [IsAdmin], 0 AS [IsLocked], './assets/img/avatars/avatar-27.png' AS [Avatar] UNION
SELECT 'general@genio.idas.co.za' AS [EmailAddress], '66c7ba6b2e0c67e2c88bd054334996e0/fc5d35d618c0a2b71a9a9a9719962b9b17ebae00516de2304ea72a160aef742d812cf169c154722659ffe3d0e49e085b365af7a8e4442ed77bf5a74992f0e2b4' AS [PasswordHash], 0 AS [IsAdmin], 0 AS [IsLocked], './assets/img/avatars/avatar-7.png' AS [Avatar]
) AS [u]

PRINT ('>> Completed > INSERT >> Default >> Root (Super) and Admin user ([dbo].[User])')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> Entities ([dbo].[Entity])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [dbo].[Entity]([Name], [Description], [CreatedBy])
SELECT
	[name] AS [Name]
	,[name] AS [Description]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [sys].[tables] AS [t]

PRINT ('>> Completed > INSERT >> Default >> Entities ([dbo].[Entity])')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> Entity Relationship(s) ([dbo].[EntityRelationShip])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] AS (
SELECT
	[pe].[_id] AS [ParentEntityId]
	,[fkcrtac].[name] AS [ParentEntityColumnName]
	,[ce].[_id] AS [ChildEntityId]
	,[fkcctac].[name] AS [ChildEntityColumnName]
	,[fk].[name] AS [RelationshipName]
FROM [sys].[foreign_keys] AS [fk]	-- All Foreign Key Constraints
JOIN [sys].[foreign_key_columns] AS [fkc] ON ([fk].[object_id] = [fkc].[constraint_object_id])	-- All Foreign Key Constraint Columns
JOIN [sys].[tables] AS [fkcrt] ON ([fkc].[referenced_object_id] = [fkcrt].[object_id])	-- Parent / Reference table
JOIN [dbo].[Entity] AS [pe] ON ([fkcrt].[name] = [pe].[Name])	-- Parent Entity
JOIN [sys].[all_columns] AS [fkcrtac] ON (
		([fkcrt].[object_id] = [fkcrtac].[object_id])
		AND ([fkc].[referenced_column_id] = [fkcrtac].[column_id])
	)	-- Parent / Reference column(s)
JOIN [sys].[tables] AS [fkcct] ON ([fk].[parent_object_id] = [fkcct].[object_id])	-- Child table
JOIN [dbo].[Entity] AS [ce] ON ([fkcct].[name] = [ce].[Name])	-- Child Entity
JOIN [sys].[all_columns] AS [fkcctac] ON (
		([fkcct].[object_id] = [fkcctac].[object_id])
		AND ([fkc].[parent_column_id] = [fkcctac].[column_id])
	)	-- Child colum(s)
)
INSERT INTO [dbo].[EntityRelationship]([ParentEntityId], [ParentEntityColumnName], [ChildEntityId], [ChildEntityColumnName], [RelationshipName], [CreatedBy])
SELECT
	[ParentEntityId]
	,[ParentEntityColumnName]
	,[ChildEntityId]
	,[ChildEntityColumnName]
	,[RelationshipName]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT >> Default >> Entity Relationship(s) ([dbo].[EntityRelationShip])')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> Lookup Category(ies) >> ([dbo].[LookupCategory])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] AS (
	SELECT DISTINCT
		LEFT([ChildEntityColumnName], LEN([ChildEntityColumnName]) - 2) AS [LookupCategory]
	FROM [dbo].[Entity] AS [e], [dbo].[EntityRelationship] AS [er]
	WHERE
		([e].[_id] = [er].[ParentEntityId])
		AND ([e].[Name] = 'LookupValue')
	UNION
	SELECT 'BudgetCode' AS [LookupCategory] UNION
	SELECT 'WageType' AS [LookupCategory]
)
INSERT INTO [dbo].[LookupCategory]([Code], [Name], [Description], [CreatedBy])
SELECT
	CASE
		WHEN [LookupCategory] IN ('Bank') THEN 'BNK'
		WHEN [LookupCategory] IN ('BudgetCode') THEN 'BGCDE'
		WHEN [LookupCategory] IN ('Capacity') THEN 'CPCTY'
		WHEN [LookupCategory] IN ('Country') THEN 'CNTR'
		WHEN [LookupCategory] IN ('Department') THEN 'DEPT'
		WHEN [LookupCategory] IN ('EmploymentType') THEN 'EMPTY'
		WHEN [LookupCategory] IN ('Gender') THEN 'GND'
		WHEN [LookupCategory] IN ('Group') THEN 'GRP'
		WHEN [LookupCategory] IN ('IndustryType') THEN 'INDTY'
		WHEN [LookupCategory] IN ('Position') THEN 'POST'
		WHEN [LookupCategory] IN ('PreferredLanguage') THEN 'LNG'
		WHEN [LookupCategory] IN ('Priority') THEN 'PRTY'
		WHEN [LookupCategory] IN ('ProjectAssignmentType') THEN 'PJATY'
		WHEN [LookupCategory] IN ('ProjectType') THEN 'PJTY'
		WHEN [LookupCategory] IN ('Province') THEN 'PRVC'
		WHEN [LookupCategory] IN ('Salutation') THEN 'SLTN'
		WHEN [LookupCategory] IN ('ScheduleType') THEN 'SCHTY'
		WHEN [LookupCategory] IN ('Status') THEN 'STS'
		WHEN [LookupCategory] IN ('TaskType') THEN 'TSKTY'
		WHEN [LookupCategory] IN ('TransactionType') THEN 'TRATY'
		WHEN [LookupCategory] IN ('UserLockReason') THEN 'ULR'
		WHEN [LookupCategory] IN ('UserType') THEN 'UT'
		WHEN [LookupCategory] IN ('WageType') THEN 'WGTY'
		WHEN [LookupCategory] IN ('CalendarEventType') THEN 'CET'
	ELSE 'NOCAT' END AS [Code]
	,[LookupCategory] AS [Name]
	,[LookupCategory] AS [Description]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT >> Default >> Lookup Category(ies) >> ([dbo].[LookupCategory])')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> Lookup Value(s) >> ([dbo].[LookupValue])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] AS
(
SELECT 'Bank' AS [LookupCategory], 'Absa Bank Ltd' AS [Value], './assets/img/banks/icon/absa-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'African Bank Ltd' AS [Value], './assets/img/banks/icon/african-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Albaraka Bank Limited' AS [Value], './assets/img/banks/icon/albaraka-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'BoE Private Clients' AS [Value], './assets/img/banks/icon/boe-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Bidvest Bank Limited' AS [Value], './assets/img/banks/icon/bidvest-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Capitec Bank Ltd' AS [Value], './assets/img/banks/icon/capitec-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'FirstRand Bank Ltd' AS [Value], './assets/img/banks/icon/fnb-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Grindrod Bank' AS [Value], './assets/img/banks/icon/grindrod-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Habib Overseas Bank Limited' AS [Value], './assets/img/banks/icon/habib-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'HBZ Bank Limited' AS [Value], './assets/img/banks/icon/hbz-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Investec Bank Ltd' AS [Value], './assets/img/banks/icon/investec-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Mercantile Bank Limited' AS [Value], './assets/img/banks/icon/mercantile-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Nedbank Group Limited' AS [Value], './assets/img/banks/icon/ned-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Rand Merchant Bank' AS [Value], './assets/img/banks/icon/rand-merchant-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'RMB Private Bank' AS [Value], './assets/img/banks/icon/rmb-private-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'South African Bank of Athens Limited' AS [Value], './assets/img/banks/icon/south-african-bank-of-athens-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Sasfin Bank Ltd' AS [Value], './assets/img/banks/icon/sasfin-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Standard Bank of SA Ltd' AS [Value], './assets/img/banks/icon/standard-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Wesbank' AS [Value], './assets/img/banks/icon/wes-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Discovery Bank Ltd' AS [Value], './assets/img/banks/icon/discovery-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Bank' AS [LookupCategory], 'Standard Chartered Bank Ltd' AS [Value], './assets/img/banks/icon/standard-chartered-bank.png' AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'BudgetCode' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Capacity' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Afghanistan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Albania' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Algeria' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Andorra' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Angola' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Antigua and Barbuda' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Argentina' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Armenia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Australia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Austria' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Azerbaijan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Bahamas' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Bahrain' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Bangladesh' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Barbados' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Belarus' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Belgium' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Belize' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Benin' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Bhutan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Bolivia (Plurinational State of)' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Bosnia and Herzegovina' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Botswana' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Brazil' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Brunei Darussalam' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Bulgaria' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Burkina Faso' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Burundi' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Cabo Verde' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Cambodia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Cameroon' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Canada' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Central African Republic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Chad' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Chile' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'China' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Colombia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Comoros' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Congo' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Cook Islands' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Costa Rica' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Croatia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Cuba' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Cyprus' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Czechia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Côte d''Ivoire' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Democratic People''s Republic of Korea' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Democratic Republic of the Congo' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Denmark' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Djibouti' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Dominica' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Dominican Republic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Ecuador' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Egypt' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'El Salvador' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Equatorial Guinea' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Eritrea' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Estonia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Eswatini' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Ethiopia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Faroe Islands' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Fiji' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Finland' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'France' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Gabon' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Gambia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Georgia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Germany' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Ghana' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Greece' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Grenada' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Guatemala' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Guinea' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Guinea-Bissau' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Guyana' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Haiti' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Honduras' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Hungary' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Iceland' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'India' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Indonesia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Iran (Islamic Republic of)' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Iraq' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Ireland' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Israel' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Italy' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Jamaica' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Japan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Jordan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Kazakhstan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Kenya' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Kiribati' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Kuwait' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Kyrgyzstan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Lao People''s Democratic Republic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Latvia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Lebanon' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Lesotho' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Liberia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Libya' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Lithuania' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Luxembourg' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Madagascar' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Malawi' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Malaysia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Maldives' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Mali' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Malta' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Marshall Islands' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Mauritania' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Mauritius' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Mexico' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Micronesia (Federated States of)' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Monaco' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Mongolia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Montenegro' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Morocco' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Mozambique' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Myanmar' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Namibia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Nauru' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Nepal' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Netherlands' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'New Zealand' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Nicaragua' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Niger' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Nigeria' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Niue' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'North Macedonia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Norway' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Oman' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Pakistan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Palau' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Panama' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Papua New Guinea' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Paraguay' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Peru' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Philippines' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Poland' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Portugal' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Qatar' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Republic of Korea' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Republic of Moldova' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Romania' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Russian Federation' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Rwanda' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Saint Kitts and Nevis' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Saint Lucia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Saint Vincent and the Grenadines' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Samoa' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'San Marino' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Sao Tome and Principe' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Saudi Arabia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Senegal' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Serbia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Seychelles' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Sierra Leone' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Singapore' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Slovakia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Slovenia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Solomon Islands' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Somalia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'South Africa' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'South Sudan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Spain' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Sri Lanka' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Sudan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Suriname' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Sweden' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Switzerland' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Syrian Arab Republic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Tajikistan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Thailand' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Timor-Leste' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Togo' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Tokelau' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Tonga' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Trinidad and Tobago' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Tunisia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Turkey' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Turkmenistan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Tuvalu' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Uganda' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Ukraine' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'United Arab Emirates' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'United Kingdom of Great Britain and Northern Ireland' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'United Republic of Tanzania' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'United States of America' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Uruguay' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Uzbekistan' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Vanuatu' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Venezuela (Bolivarian Republic of)' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Viet Nam' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Yemen' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Zambia' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Country' AS [LookupCategory], 'Zimbabwe' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Accounting' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Administration' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Business Development' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Communications' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Customer Service' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Customer Support' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Engineering' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Export' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Finance' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'General Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Health and Safety' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Human Resources' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Inventory' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'IT' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Learning, Training and Development' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Legal' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Logistics' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Management' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Marketing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Operations' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Planning' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Procurement' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Product Quality' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Production' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Public Relations' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Purchasing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Quality Assurance' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Research and Development' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Sales' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Shipping' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Supervision' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Technical Support' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Department' AS [LookupCategory], 'Transportation' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Permanent' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Part-Time' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Temporary' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Seasonal' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Indipendent Contractor' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Freelancer' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Consultant' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Gender' AS [LookupCategory], 'Female' AS [Value], NULL AS [Image], 'female' AS [Icon], NULL AS [Color] UNION
SELECT 'Gender' AS [LookupCategory], 'Male' AS [Value], NULL AS [Image], 'male' AS [Icon], NULL AS [Color] UNION
SELECT 'Gender' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], 'person' AS [Icon], NULL AS [Color] UNION
SELECT 'Group' AS [LookupCategory], 'Administrators' AS [Value], NULL AS [Image], 'security' AS [Icon], NULL AS [Color] UNION
SELECT 'Group' AS [LookupCategory], 'Clients' AS [Value], NULL AS [Image], 'reduce_capacity' AS [Icon], NULL AS [Color] UNION
SELECT 'Group' AS [LookupCategory], 'Employees' AS [Value], NULL AS [Image], 'groups' AS [Icon], NULL AS [Color] UNION
SELECT 'Group' AS [LookupCategory], 'Everyone' AS [Value], NULL AS [Image], 'supervised_user_circle' AS [Icon], NULL AS [Color] UNION
SELECT 'Group' AS [LookupCategory], 'Managers' AS [Value], NULL AS [Image], 'supervisor_account' AS [Icon], NULL AS [Color] UNION
SELECT 'Group' AS [LookupCategory], 'Suppliers' AS [Value], NULL AS [Image], 'connect_without_contact' AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Abortion Policy/Anti-Abortion' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Abortion Policy/Pro-Abortion Rights' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Accountants' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Advertising/Public Relations' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Aerospace, Defense Contractors' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agribusiness' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agricultural Services & Products' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agriculture' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Air Transport' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Air Transport Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Airlines' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Alcoholic Beverages' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Alternative Energy Production & Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Architectural Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Attorneys/Law Firms' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Dealers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Dealers, Japanese' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Manufacturers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Automotive' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banking, Mortgage' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banks, Commercial' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banks, Savings & Loans' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Bars & Restaurants' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Beer, Wine & Liquor' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Books, Magazines & Newspapers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Broadcasters, Radio/TV' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Builders/General Contractors' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Builders/Residential' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Building Materials & Equipment' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Building Trade Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Business Associations' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Business Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cable & Satellite TV Production & Distribution' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees, Democratic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees, Republican' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Dealers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Dealers, Imports' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Manufacturers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Casinos / Gambling' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cattle Ranchers/Livestock' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Chemical & Related Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Chiropractors' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Civil Servants/Public Officials' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Clergy & Religious Organizations' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Clothing Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Coal Mining' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Colleges, Universities & Schools' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Commercial Banks' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Commercial TV & Radio Stations' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Communications/Electronics' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Computer Software' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Conservative/Republican' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Credit Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Crop Production & Basic Processing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cruise Lines' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cruise Ships & Lines' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Dairy' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense Aerospace' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense Electronics' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense/Foreign Policy Advocates' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic Candidate Committees' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic Leadership PACs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic/Liberal' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Dentists' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Doctors & Other Health Professionals' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Drug Manufacturers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Education' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electric Utilities' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electronics Manufacturing & Equipment' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electronics, Defense Contractors' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Energy & Natural Resources' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Entertainment Industry' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Environment' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Farm Bureaus' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Farming' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Finance / Credit Companies' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Finance, Insurance & Real Estate' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food & Beverage' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Processing & Sales' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Products Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Stores' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'For-profit Education' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'For-profit Prisons' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Foreign & Defense Policy' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Forestry & Forest Products' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Foundations, Philanthropists & Non-Profits' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Funeral Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gambling & Casinos' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gambling, Indian Casinos' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Garbage Collection/Waste Management' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gas & Oil' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'General Contractors' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Government Employee Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Government Employees' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gun Control' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gun Rights' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health Professionals' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health Services/HMOs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hedge Funds' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'HMOs & Health Care Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Home Builders' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hospitals & Nursing Homes' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hotels, Motels & Tourism' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Human Rights' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Ideological/Single-Issue' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Indian Gaming' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Industrial Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Insurance' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Internet' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Israel Policy' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Labor' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lawyers & Lobbyists' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lawyers / Law Firms' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Leadership PACs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'LGBTQIA Rights & Issues' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Liberal/Democratic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Liquor, Wine & Beer' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Livestock' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lobbyists' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lodging / Tourism' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Logging, Timber & Paper Mills' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Manufacturing, Misc' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marijuana' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marijuana' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marine Transport' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Meat processing & products' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Medical Supplies' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Mining' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Business' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Finance' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Manufacturing & Distributing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Miscellaneous Defense' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Miscellaneous Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Mortgage Bankers & Brokers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Motion Picture Production & Distribution' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Music Production' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Natural Gas Pipelines' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Newspaper, Magazine & Book Publishing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Non-profits, Foundations & Philanthropists' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nurses' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nursing Homes/Hospitals' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nutritional & Dietary Supplements' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Oil & Gas' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Payday Lenders' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pharmaceutical Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pharmaceuticals / Health Products' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Phone Companies' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Physicians & Other Health Professionals' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Postal Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Poultry & Eggs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Power Utilities' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Printing & Publishing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Private Equity & Investment Firms' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pro-Israel' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Professional Sports, Sports Arenas & Related Equipment & Services' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Progressive/Democratic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Public Employees' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Public Sector Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Publishing & Printing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Radio/TV Stations' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Railroads' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Real Estate' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Record Companies/Singers' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Recorded Music & Music Production' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Recreation / Live Entertainment' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Religious Organizations/Clergy' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican Candidate Committees' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican Leadership PACs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican/Conservative' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Residential Construction' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Restaurants & Drinking Establishments' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Retail Sales' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Retired' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Savings & Loans' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Schools/Education' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sea Transport' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Securities & Investment' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Special Trade Contractors' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sports, Professional' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Steel Production' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Stock Brokers/Investment Industry' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Student Loan Companies' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sugar Cane & Sugar Beets' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Teachers Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Teachers/Education' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Telecom Services & Equipment' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Telephone Utilities' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Textiles' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Timber, Logging & Paper Mills' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Tobacco' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Transportation' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Transportation Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Trash Collection/Waste Management' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Trucking' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'TV / Movies / Music' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'TV Production' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Airline' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Building Trades' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Industrial' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Misc' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Public Sector' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Teacher' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Transportation' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Universities, Colleges & Schools' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Vegetables & Fruits' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Venture Capital' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Waste Management' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Wine, Beer & Liquor' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Women''s Issues' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'CEO' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'Managing Director' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'General Manager' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'Secretary' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'Clerk' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'Engineer' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'Senior Engineer' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'CFO' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'Personal Assistant' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Position' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'Afrikaans' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'English' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiNdebele' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SePedi' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SeSotho' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiSwati' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'Tshonga' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SeTswana' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'TshiVenda' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiXhosa' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiZulu' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Blocked' AS [Value], NULL AS [Image], 'close' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Blocker' AS [Value], NULL AS [Image], 'traffic' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Critical' AS [Value], NULL AS [Image], 'emergency' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Dependency' AS [Value], NULL AS [Image], 'edit_road' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Done' AS [Value], NULL AS [Image], 'check_circle' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'High' AS [Value], NULL AS [Image], 'star_outline' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Highest' AS [Value], NULL AS [Image], 'star' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Low' AS [Value], NULL AS [Image], 'star_outline' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Lowest' AS [Value], NULL AS [Image], 'star' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Major' AS [Value], NULL AS [Image], 'arrow_upward' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Medium' AS [Value], NULL AS [Image], 'expand_more' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Minor' AS [Value], NULL AS [Image], 'expand_less' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Normal' AS [Value], NULL AS [Image], 'menu' AS [Icon], NULL AS [Color] UNION
SELECT 'Priority' AS [LookupCategory], 'Trivial' AS [Value], NULL AS [Image], 'south' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Project Manager' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Team Lead' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Technical Lead' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Supervisor' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'General' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Engineer' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Senior Engineer' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Supplier' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Client' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Business Analyst' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Client Liason' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Administrative' AS [Value], NULL AS [Image], 'store' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Business Implementation' AS [Value], NULL AS [Image], 'maps_home_work' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Complex or Mega' AS [Value], NULL AS [Image], 'pages' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Computer Software Development' AS [Value], NULL AS [Image], 'widgets' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Construction' AS [Value], NULL AS [Image], 'domain' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Design' AS [Value], NULL AS [Image], 'tune' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Equipment Installation' AS [Value], NULL AS [Image], 'devices' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Equipment Removal' AS [Value], NULL AS [Image], 'cast' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Event Management' AS [Value], NULL AS [Image], 'category' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Infrastructure' AS [Value], NULL AS [Image], 'location_city' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Integration' AS [Value], NULL AS [Image], 'device_hub' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Maintenance' AS [Value], NULL AS [Image], 'gamepad' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Marketing' AS [Value], NULL AS [Image], 'campaign' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Media' AS [Value], NULL AS [Image], 'notifications_active' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'New Product Development' AS [Value], NULL AS [Image], 'apps_outage' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Outreach' AS [Value], NULL AS [Image], 'connect_without_contact' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Processes, Procedures and Training' AS [Value], NULL AS [Image], 'account_tree' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Proposal' AS [Value], NULL AS [Image], 'content_paste' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Prototype' AS [Value], NULL AS [Image], 'inventory' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Reengineering' AS [Value], NULL AS [Image], 'change_circle' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Research' AS [Value], NULL AS [Image], 'manage_search' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'Social' AS [Value], NULL AS [Image], 'group_work' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'System Installation' AS [Value], NULL AS [Image], 'devices' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'System Modification' AS [Value], NULL AS [Image], 'cast_connected' AS [Icon], NULL AS [Color] UNION
SELECT 'ProjectType' AS [LookupCategory], 'System Uninstallation' AS [Value], NULL AS [Image], 'connected_tv' AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'Eastern Cape' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'Free State' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'Gauteng' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'KwaZulu-Natal' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'Limpopo' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'Mpumalanga' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'Northern Cape' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'North West' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Province' AS [LookupCategory], 'Western Cape' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Miss' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ms' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Admiral' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Air Comm' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ambassador' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Baron' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Baroness' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brig & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brig Gen' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brigadier' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brother' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Canon' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Capt' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Chief' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Cllr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Col' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Commander' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Commander & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Consul' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Consul General' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Count' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Countess' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Countess of' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Cpl' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dame' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Deputy' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dr & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Drs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Duchess' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Duke' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Earl' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Father' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'General' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Gräfin' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'HE' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'HMA' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Her Grace' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'His Excellency' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ing' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Judge' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Justice' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lady' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lic' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Llc' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lord' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lord & Lady' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt Col' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt Cpl' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'M' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Madam' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Madame' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Major' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Major General' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Marchioness' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Marquis' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Minister' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mme' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Dr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Ms' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prince' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Princess' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Professor' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Dr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Rev' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof Dame' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof Dr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Pvt' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rabbi' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rear Admiral' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev Canon' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev Dr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Senator' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sgt' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sheriff' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sir' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sir & Lady' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sister' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sqr. Leader' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Earl of' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Dr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Lady' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Lord' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Mrs' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Sir' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Honourable' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Dr' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Lord' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Sir' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Visc' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Viscount' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'Salutation' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'ScheduleType' AS [LookupCategory], 'Appointment' AS [Value], NULL AS [Image], 'timer' AS [Icon], NULL AS [Color] UNION
SELECT 'ScheduleType' AS [LookupCategory], 'Meeting' AS [Value], NULL AS [Image], 'event' AS [Icon], NULL AS [Color] UNION
SELECT 'ScheduleType' AS [LookupCategory], 'Holiday' AS [Value], NULL AS [Image], 'view_day' AS [Icon], NULL AS [Color] UNION
SELECT 'ScheduleType' AS [LookupCategory], 'Public Holiday' AS [Value], NULL AS [Image], 'today' AS [Icon], NULL AS [Color] UNION
SELECT 'ScheduleType' AS [LookupCategory], 'Task' AS [Value], NULL AS [Image], 'task_alt' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Created' AS [Value], NULL AS [Image], 'create' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Not Started' AS [Value], NULL AS [Image], 'not_started' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Started' AS [Value], NULL AS [Image], 'play_circle_filled' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'In Progress' AS [Value], NULL AS [Image], 'fast_forward' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Completed' AS [Value], NULL AS [Image], 'check_circle' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Done' AS [Value], NULL AS [Image], 'check_circle' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Blocked' AS [Value], NULL AS [Image], 'not_interested' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'On Hold' AS [Value], NULL AS [Image], 'offline_pin' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Re-Started' AS [Value], NULL AS [Image], 'history' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'Cancelled' AS [Value], NULL AS [Image], 'close' AS [Icon], NULL AS [Color] UNION
SELECT 'Status' AS [LookupCategory], 'De-scoped' AS [Value], NULL AS [Image], 'pause' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Advertising' AS [Value], NULL AS [Image], 'book' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Bug' AS [Value], NULL AS [Image], 'bug_report' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Change' AS [Value], NULL AS [Image], 'track_changes' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Consultation' AS [Value], NULL AS [Image], 'people_alt' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Deployment' AS [Value], NULL AS [Image], 'new_releases' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Design' AS [Value], NULL AS [Image], 'satellite' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Development' AS [Value], NULL AS [Image], 'widgets' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Incident' AS [Value], NULL AS [Image], 'report_problem' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Marketing' AS [Value], NULL AS [Image], 'article' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Monitor' AS [Value], NULL AS [Image], 'explore' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Planning' AS [Value], NULL AS [Image], 'view_list' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Problem' AS [Value], NULL AS [Image], 'report_problem' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Reporting' AS [Value], NULL AS [Image], 'content_paste' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Research' AS [Value], NULL AS [Image], 'blur_on' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Sales' AS [Value], NULL AS [Image], 'burst_mode' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Service Request' AS [Value], NULL AS [Image], 'contact_mail' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Support' AS [Value], NULL AS [Image], 'call' AS [Icon], NULL AS [Color] UNION
SELECT 'TaskType' AS [LookupCategory], 'Training' AS [Value], NULL AS [Image], 'speaker_notes' AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Create' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Read' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Change' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Edit' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Update' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Delete' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Assign' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Assign' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Un-Assign' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Login' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Logout' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Registration' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'De-Registration' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Activation' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'De-Activation' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Termination' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Registration' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Activation' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Calculate' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Calculate' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Error' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Upload' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Download' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Message' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Email' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Send' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Receive' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Resend' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Expired' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'Number of Retries Reached' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Terminated' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Does Not Exist' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'Invalid Credentials' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Compromised' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Not Activated' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'UserType' AS [LookupCategory], 'Root' AS [Value], NULL AS [Image], 'admin_panel_settings' AS [Icon], NULL AS [Color] UNION
SELECT 'UserType' AS [LookupCategory], 'Admin' AS [Value], NULL AS [Image], 'security' AS [Icon], NULL AS [Color] UNION
SELECT 'UserType' AS [LookupCategory], 'Employee' AS [Value], NULL AS [Image], 'groups' AS [Icon], NULL AS [Color] UNION
SELECT 'UserType' AS [LookupCategory], 'Client' AS [Value], NULL AS [Image], 'reduce_capacity' AS [Icon], NULL AS [Color] UNION
SELECT 'UserType' AS [LookupCategory], 'Supplier' AS [Value], NULL AS [Image], 'connect_without_contact' AS [Icon], NULL AS [Color] UNION
SELECT 'UserType' AS [LookupCategory], 'General' AS [Value], NULL AS [Image], 'supervised_user_circle' AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Monthly' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Hourly' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Commission' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Overtime' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Retroactive' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Bonus' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Severance' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'WageType' AS [LookupCategory], 'Accrued Time Off' AS [Value], NULL AS [Image], NULL AS [Icon], NULL AS [Color] UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Team Cadence' AS [Value], NULL AS [Image], 'groups' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Progress Check' AS [Value], NULL AS [Image], 'checklist_rtl' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'One-on-One' AS [Value], NULL AS [Image], 'account_tree' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Action Review' AS [Value], NULL AS [Image], 'schedule' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Governance' AS [Value], NULL AS [Image], 'description' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Idea Generation' AS [Value], NULL AS [Image], 'lightbulb' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Planning' AS [Value], NULL AS [Image], 'workspaces' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Workshop' AS [Value], NULL AS [Image], 'miscellaneous_services' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Problem Solving' AS [Value], NULL AS [Image], 'verified' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Decision Making' AS [Value], NULL AS [Image], 'assistant' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Sensemaking' AS [Value], NULL AS [Image], 'fingerprint' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Introductions' AS [Value], NULL AS [Image], 'widgets' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Issue Resolution' AS [Value], NULL AS [Image], 'fact_check' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Community of Practice' AS [Value], NULL AS [Image], 'language' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Training' AS [Value], NULL AS [Image], 'pending_actions' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Broadcast' AS [Value], NULL AS [Image], 'question_answer' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Consultation' AS [Value], NULL AS [Image], 'account_balance' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Interview' AS [Value], NULL AS [Image], 'person_pin' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Site Visit' AS [Value], NULL AS [Image], 'store' AS [Icon], NULL AS [Color]  UNION
SELECT 'CalendarEventType' AS [LookupCategory], 'Board' AS [Value], NULL AS [Image], 'leaderboard' AS [Icon], NULL AS [Color]
)
INSERT INTO [dbo].[LookupValue]([LookupCategoryId], [Value], [Image], [Icon], [CreatedBy])
SELECT DISTINCT
	[lc].[_id] AS [LookupCategoryId]
	,CASE
		WHEN LEN(ISNULL([cte].[Value], '')) = 0 THEN 'Other'
		ELSE LTRIM(RTRIM([cte].[Value]))
	END AS [Value]
	,[Image]
	,[Icon]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
JOIN [dbo].[LookupCategory] AS [lc] ON LTRIM(RTRIM([cte].[LookupCategory])) = LTRIM(RTRIM([lc].[Name]))

PRINT ('>> Completed > INSERT >> Default >> Lookup Value(s) >> ([dbo].[LookupValue])')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- UPDATE >> Default >> [UserType] > Root, Admin, General > [dbo].[User]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
UPDATE [u]
SET
	[UserTypeId] = [ut].[UserTypeId]
	,[ModifiedBy] = [u].[CreatedBy]
	,[DateModified] = GETDATE()
FROM [dbo].[User] AS [u]
JOIN (
	SELECT
		[lv].[_id] AS [UserTypeId]
		,[lv].[Value] AS [UserType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'UserType')
		AND ([lv].[Value] IN ('Root', 'Admin', 'General'))
) AS [ut] ON (
	-- Root
	([u].[EmailAddress] IN ('root@genio.idas.co.za') AND [ut].[UserType] IN ('Root'))
	-- Admin
	OR ([u].[EmailAddress] IN ('admin@genio.idas.co.za') AND [ut].[UserType] IN ('Admin'))
	-- General
	OR ([u].[EmailAddress] IN ('general@genio.idas.co.za') AND [ut].[UserType] IN ('General'))
);

PRINT ('>> Completed > UPDATE >> Default >> Root, Admin, General > [UserType] > [dbo].[User]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> [Group] > Administrators, Everyone > [dbo].[UserGroup]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [dbo].[UserGroup] ([UserId],[GroupId],[CreatedBy])
SELECT
	[u].[_id] AS [UserId]
	,[g].[GroupId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[User] AS [u]
JOIN (
	SELECT
		[lv].[_id] AS [GroupId]
		,[lv].[Value] AS [Group]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Group')
		AND ([lv].[Value] IN ('Administrators', 'Everyone'))
) AS [g] ON (
	-- Administrators
	(
		[u].[EmailAddress] IN ('root@genio.idas.co.za', 'admin@genio.idas.co.za')
		AND [g].[Group] IN ('Administrators')
	)
	-- Everyone
	OR (
		[u].[EmailAddress] IN ('general@genio.idas.co.za')
		AND [g].[Group] IN ('Everyone')
	)
)

PRINT ('>> Completed > INSERT >> Default >> [Group] > Administrators, Everyone > [dbo].[UserGroup]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> Menu Item(s) > [dbo].[MenuItem]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] ([rowId], [path], [title], [image], [icon], [CssClass], [configuration], [component]) AS (
SELECT 1 AS [rowId], '/dashboard' AS [path], 'Dashboard' AS [title], NULL AS [image], 'dashboard' AS [icon], NULL AS [CssClass], 'DashboardConfiguration' AS [configuration], 'DashboardComponent' AS [component] UNION
SELECT 2 AS [rowId], '/profile' AS [path], 'My Profile' AS [title], NULL AS [image], 'account_circle' AS [icon], NULL AS [CssClass], 'UserProfileConfiguration' AS [configuration], 'UserProfileComponent' AS [component] UNION
SELECT 3 AS [rowId], '/inbox' AS [path], 'My Inbox' AS [title], NULL AS [image], 'contact_mail' AS [icon], NULL AS [CssClass], 'UserInboxConfiguration' AS [configuration], 'UserInboxComponent' AS [component] UNION
SELECT 4 AS [rowId], '/schedule' AS [path], 'My Schedule' AS [title], NULL AS [image], 'event' AS [icon], NULL AS [CssClass], 'UserScheduleConfiguration' AS [configuration], 'UserScheduleComponent' AS [component] UNION
SELECT 5 AS [rowId], '/projects' AS [path], 'My Projects' AS [title], NULL AS [image], 'auto_awesome_motion' AS [icon], NULL AS [CssClass], 'ProjectsConfiguration' AS [configuration], 'ProjectsComponent' AS [component] UNION
SELECT 6 AS [rowId], '/tasks' AS [path], 'My Tasks' AS [title], NULL AS [image], 'tune' AS [icon], NULL AS [CssClass], 'TasksConfiguration' AS [configuration], 'TasksComponent' AS [component] UNION
SELECT 7 AS [rowId], '/employees' AS [path], 'My Employees' AS [title], NULL AS [image], 'groups' AS [icon], NULL AS [CssClass], 'EmployeesConfiguration' AS [configuration], 'EmployeesComponent' AS [component] UNION
SELECT 8 AS [rowId], '/clients' AS [path], 'Clients' AS [title], NULL AS [image], 'stream' AS [icon], NULL AS [CssClass], 'ClientsConfiguration' AS [configuration], 'ClientsComponent' AS [component] UNION
SELECT 9 AS [rowId], '/suppliers' AS [path], 'Suppliers' AS [title], NULL AS [image], 'reduce_capacity' AS [icon], NULL AS [CssClass], 'SuppliersConfiguration' AS [configuration], 'SuppliersComponent' AS [component] UNION
SELECT 10 AS [rowId], '/users' AS [path], 'Users' AS [title], NULL AS [image], 'manage_accounts' AS [icon], NULL AS [CssClass], 'UsersConfiguration' AS [configuration], 'UsersComponent' AS [component]
)
INSERT INTO [dbo].[MenuItem]([Path], [Title], [Image], [Icon], [CssClass], [Configuration], [Component], [IsActive], [CreatedBy])
SELECT
	[path], [title], [image], [icon], [CssClass], [configuration], [component],
	CASE
		WHEN [path] IN ('/notifications') THEN 0
		ELSE 1
	END AS [IsActive]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
ORDER BY [rowId]

PRINT ('>> Completed > INSERT >> Default >> Menu Item(s) > [dbo].[MenuItem]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> Group(s), Menu Item(s) > [dbo].[GroupMenuItem]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [dbo].[GroupMenuItem]([GroupId], [MenuItemId], [CreatedBy])
SELECT
	[g].[GroupId]
	,[mi].[_id] AS [MenuItemId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[MenuItem] AS [mi]
JOIN (
	SELECT
		[lv].[_id] AS [GroupId]
		,COALESCE([lv].[Value], [lv].[Value2], [lv].[Value3]) AS [Group]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Group')
) AS [g] ON (
	-- Everyone
	(([g].[Group] IN ('Everyone')) AND ([mi].[Title] IN ('Dashboard', 'My Profile')))
	-- Administrators
	OR (([g].[Group] IN ('Administrators')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks', 'My Employees', 'Clients', 'Suppliers', 'Users')))
	-- Clients
	OR (([g].[Group] IN ('Clients')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Employees
	OR (([g].[Group] IN ('Employees')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Managers
	OR (([g].[Group] IN ('Managers')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks', 'My Employees', 'Clients', 'Suppliers')))
	-- Suppliers
	OR (([g].[Group] IN ('Suppliers')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
);

PRINT ('>> Completed > INSERT >> Default >> Group(s), Menu Item(s) > [dbo].[GroupMenuItem]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Default >> UserType(s), Menu Item(s) > [dbo].[UserTypeMenuItem]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [dbo].[UserTypeMenuItem]([UserTypeId], [MenuItemId], [CreatedBy])
SELECT
	[ut].[UserTypeId]
	,[mi].[_id] AS [MenuItemId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[MenuItem] AS [mi]
JOIN (
	SELECT
		[lv].[_id] AS [UserTypeId]
		,COALESCE([lv].[Value], [lv].[Value2], [lv].[Value3]) AS [UserType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'UserType')
) AS [ut] ON (
	-- General
	(([ut].[UserType] IN ('General')) AND ([mi].[Title] IN ('Dashboard', 'My Profile')))
	-- Admin, Root
	OR (([ut].[UserType] IN ('Admin', 'Root')) AND ([mi].[Title] IN ('Dashboard', 'My Profile', 'My Inbox', 'My Schedule', 'My Projects', 'My Tasks', 'My Employees', 'Clients', 'Suppliers', 'Users')))
	-- Client
	OR (([ut].[UserType] IN ('Client')) AND ([mi].[Title] IN ('Dashboard', 'My Profile', 'My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Employee
	OR (([ut].[UserType] IN ('Employee')) AND ([mi].[Title] IN ('Dashboard', 'My Profile', 'My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
	-- Supplier
	OR (([ut].[UserType] IN ('Supplier')) AND ([mi].[Title] IN ('My Inbox', 'My Schedule', 'My Projects', 'My Tasks')))
);

PRINT ('>> Completed > INSERT >> Default >> UserType(s), Menu Item(s) > [dbo].[UserTypeMenuItem]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> Employee(s) > [dbo].[Employee]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] ([EmployeeNumber], [SalutationId], [Name], [MiddleName], [Surname], [IdNumber], [BirthDate], [GenderId], [EmploymentTypeId], [PositionId], [DepartmentId], [ManagerId], [DateHired], [IsTerminated], [DateTerminated]) AS (
SELECT 'C62302' AS [EmployeeNumber], 'Ms' AS [SalutationId], 'Jane' AS [Name], NULL AS [MiddleName], 'Doe' AS [Surname], 9202204720082 AS [IdNumber], '1992-02-20' AS [BirthDate], 'Female' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'CEO' AS [PositionId], 'Management' AS [DepartmentId], NULL AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
SELECT 'M36517' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'John' AS [Name], NULL AS [MiddleName], 'Doe' AS [Surname], 9304195659081 AS [IdNumber], '1993-04-19' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Managing Director' AS [PositionId], 'Management' AS [DepartmentId], 'Jane Doe' AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
SELECT 'E37518' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Good' AS [Name], NULL AS [MiddleName], 'Job' AS [Surname], 9102127508084 AS [IdNumber], '1991-02-12' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'John Doe' AS [ManagerId], '2016-01-01' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated] UNION
SELECT 'E95590' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Bad' AS [Name], NULL AS [MiddleName], 'Job' AS [Surname], 9610136334084 AS [IdNumber], '1996-10-13' AS [BirthDate], 'Male' AS [GenderId], 'Permanent' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'Good Job' AS [ManagerId], '2016-07-23' AS [DateHired], 1 AS [IsTerminated], '2018-02-15' AS [DateTerminated] UNION
SELECT 'E87365' AS [EmployeeNumber], 'Mr' AS [SalutationId], 'Joe' AS [Name], NULL AS [MiddleName], 'Soap' AS [Surname], 8502065982080 AS [IdNumber], '1985-02-06' AS [BirthDate], 'Male' AS [GenderId], 'Consultant' AS [EmploymentTypeId], 'Engineer' AS [PositionId], 'Operations' AS [DepartmentId], 'Good Job' AS [ManagerId], '2018-04-30' AS [DateHired], 0 AS [IsTerminated], NULL AS [DateTerminated]
)
INSERT INTO [dbo].[Employee]([EmployeeNumber], [SalutationId], [Name], [MiddleName], [Surname], [IdNumber], [BirthDate], [GenderId], [EmploymentTypeId], [PositionId], [DepartmentId], [DateHired], [IsTerminated], [DateTerminated], [IsActive], [CreatedBy])
SELECT
	[cte].[EmployeeNumber],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lvpa].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[MiddleName],
	[cte].[Surname],
	[cte].[IdNumber],
	[cte].[BirthDate],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Gender' AND [lvpa].[Value] = [cte].[GenderId]) AS [GenderId],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'EmploymentType' AND [lvpa].[Value] = [cte].[EmploymentTypeId]) AS [EmploymentTypeId],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Position' AND [lvpa].[Value] = [cte].[PositionId]) AS [PositionId],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Department' AND [lvpa].[Value] = [cte].[DepartmentId]) AS [DepartmentId],
	[cte].[DateHired],
	[cte].[IsTerminated],
	[cte].[DateTerminated],
	CASE WHEN [cte].[IsTerminated] = 1 THEN 0 ELSE 1 END [IsActive],
	(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

UPDATE [e]
SET
	[e].[ManagerId] = [me].[_id]	
FROM [dbo].[Employee] AS [e]
LEFT JOIN [dbo].[Employee] AS [me] ON (
	-- Employee(s): Jane Doe, Bad Job, Manager: John Doe
	(([e].[Name] + ' ' + [e].[Surname]) IN ('Jane Doe', 'Bad Job') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('John Doe'))
	-- Employee(s): John Doe, Manager: Jane Doe
	OR (([e].[Name] + ' ' + [e].[Surname]) IN ('John Doe') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('Jane Doe'))
	-- Employee(s): Joe Soap, Manager: Jane Doe
	OR (([e].[Name] + ' ' + [e].[Surname]) IN ('Joe Soap') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('Bad Job'))
	-- Employee(s): Good Job, Manager: Joe Soap
	OR (([e].[Name] + ' ' + [e].[Surname]) IN ('Good Job') AND ([me].[Name] + ' ' + [me].[Surname]) IN ('Joe Soap'))
)

PRINT ('>> Completed INSERT >> Test >> Employee(s) > [dbo].[Employee]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> Client(s) > [dbo].[Client]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] ([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber]) AS (
SELECT 'Mr' AS [SalutationId], 'Close' [Name], 'Corporation' [Surname], 'Close Corporation' [CompanyName], 'Construction Services' [IndustryTypeId], '7707288001087' [IdNumber], '2009/222222/23' [RegistrationNumber], NULL [VATNumber] UNION
SELECT 'Mr' AS [SalutationId], 'Private' [Name], 'Company' [Surname], 'Private Company' [CompanyName], 'Entertainment Industry' [IndustryTypeId], '8105252255087' [IdNumber], '2016/222222/07' [RegistrationNumber], '4220122222' [VATNumber]
)
INSERT INTO [dbo].[Client]([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [CreatedBy])
SELECT
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lvpa].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[Surname],
	[cte].[CompanyName],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'IndustryType' AND [lvpa].[Value] = [cte].[IndustryTypeId]) AS [IndustryTypeId],
	[cte].[IdNumber],
	[cte].[RegistrationNumber],
	[cte].[VATNumber],
	(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[Client]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> Supplier(s) > [dbo].[Supplier]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] ([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [BankId], [AccountNumber]) AS (
SELECT 'Ms' AS [SalutationId], 'Thandi' AS [Name], 'Ndaba' AS [Surname], 'Thandi Ndaba Attorneys' AS [CompanyName], 'Attorneys/Law Firms' AS [IndustryTypeId], NULL AS [IdNumber], '2008/222222/23' AS [RegistrationNumber], 4820082222 AS [VATNumber], 'Absa Bank Ltd' AS [BankId], 1234567890123 AS [AccountNumber]
)
INSERT INTO [dbo].[Supplier]([SalutationId], [Name], [Surname], [CompanyName], [IndustryTypeId], [IdNumber], [RegistrationNumber], [VATNumber], [BankId], [AccountNumber], [CreatedBy])
SELECT
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Salutation' AND [lvpa].[Value] = [cte].[SalutationId]) AS [SalutationId],
	[cte].[Name],
	[cte].[Surname],
	[cte].[CompanyName],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'IndustryType' AND [lvpa].[Value] = [cte].[IndustryTypeId]) AS [IndustryTypeId],
	[cte].[IdNumber],
	[cte].[RegistrationNumber],
	[cte].[VATNumber],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Bank' AND [lvpa].[Value] = [cte].[BankId]) AS [BankId],
	[cte].[AccountNumber],
	(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]

PRINT ('>> Completed > INSERT >> Test >> Supplier(s) > [dbo].[Supplier]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> ContactDetail(s) > [dbo].[ContactDetail]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [cte] ([EmployeeId], [ClientId], [SupplierId], [RecipientsName], [EmailAddress], [HomeTelephoneNumber], [OfficeTelephoneNumber], [MobileTelephoneNumber], [PreferredLanguageId], [UseEmailAddress], [UseHomeTelephoneNumber], [UseOfficeTelephoneNumber], [UseMobileTelephoneNumber], [UsePostalAddress], [Website], [AddressLine1], [AddressLine2], [City], [ProvinceId], [PostalCode], [CountryId]) AS (
SELECT 'Jane Doe' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Jane Doe' AS [RecipientsName], 'Jane.Doe@genio.idas.co.za' AS [EmailAddress], '27311234567' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'John Doe' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'John Doe' AS [RecipientsName], 'John.Doe@genio.idas.co.za' AS [EmailAddress], '27311234568' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Good Job' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Good Job' AS [RecipientsName], 'Good.Job@genio.idas.co.za' AS [EmailAddress], '27311234569' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'IsiZulu' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Bad Job' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Bad Job' AS [RecipientsName], 'Bad.Job@genio.idas.co.za' AS [EmailAddress], '27311234570' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'IsiZulu' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT 'Joe Soap' AS [EmployeeId], NULL AS [ClientId], NULL AS [SupplierId], 'Joe Soap' AS [RecipientsName], 'Joe.Soap@genio.idas.co.za' AS [EmailAddress], '27311234571' AS [HomeTelephoneNumber], '27311234567' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.genio.idas.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], 'Close Corporation' AS [ClientId], NULL AS [SupplierId], 'Close Corporation' AS [RecipientsName], 'info@closecorporation.co.za' AS [EmailAddress], '27311234572' AS [HomeTelephoneNumber], '27311234572' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'IsiXhosa' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.closecorporation.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], 'Private Company' AS [ClientId], NULL AS [SupplierId], 'Private Company' AS [RecipientsName], 'info@privatecompany.co.za' AS [EmailAddress], '27311234573' AS [HomeTelephoneNumber], '27311234573' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 0 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.privatecompany.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country] UNION
SELECT NULL AS [EmployeeId], NULL AS [ClientId], 'Thandi Ndaba' AS [SupplierId], 'Thandi Ndaba Attorneys' AS [RecipientsName], 'info@thandindabaattorneys.co.za' AS [EmailAddress], '27311234573' AS [HomeTelephoneNumber], '27311234573' AS [OfficeTelephoneNumber], NULL AS [MobileTelephoneNumber], 'English' AS [PreferredLanguageId], 1 AS [UseEmailAddress], 1 AS [UseHomeTelephoneNumber], 0 AS [UseOfficeTelephoneNumber], 0 AS [UseMobileTelephoneNumber], 0 AS [UsePostalAddress], 'www.thandindabaattorneys.co.za' AS [Website], NULL AS [AddressLine1], NULL AS [AddressLine2], NULL AS [City], NULL AS [ProvinceId], NULL AS [PostalCode], NULL AS [Country]
)
INSERT INTO [dbo].[ContactDetail]([EmployeeId], [ClientId], [SupplierId], [RecipientsName], [EmailAddress], [HomeTelephoneNumber], [OfficeTelephoneNumber], [MobileTelephoneNumber], [PreferredLanguageId], [UseEmailAddress], [UseHomeTelephoneNumber], [UseOfficeTelephoneNumber], [UseMobileTelephoneNumber], [UsePostalAddress], [Website], [AddressLine1], [AddressLine2], [City], [ProvinceId], [PostalCode], [CountryId], [CreatedBy])
SELECT
	[e].[_id] AS [EmployeeId],
	[c].[_id] AS [ClientId],
	[s].[_id] AS [SupplierId],
	[RecipientsName],
	[EmailAddress],
	[HomeTelephoneNumber],
	[OfficeTelephoneNumber],
	[MobileTelephoneNumber],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'PreferredLanguage' AND [lvpa].[Value] = [cte].[PreferredLanguageId]) AS [PreferredLanguageId],
	[UseEmailAddress],
	[UseHomeTelephoneNumber],
	[UseOfficeTelephoneNumber],
	[UseMobileTelephoneNumber],
	[UsePostalAddress],
	[Website],
	[AddressLine1],
	[AddressLine2],
	[City],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Province' AND [lvpa].[Value] = [cte].[ProvinceId]) AS [ProvinceId],
	[PostalCode],
	(SELECT [lvpa].[_id] FROM [dbo].[LookupValue] AS [lvpa] JOIN [dbo].[LookupCategory] AS [lc] ON [lvpa].[LookupCategoryId] = [lc].[_id] WHERE [lc].[Name] = 'Country' AND [lvpa].[Value] = [cte].[CountryId]) AS [CountryId],
	(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
LEFT JOIN [dbo].[Employee] AS [e] ON [cte].[EmployeeId] = ([e].[Name] + ' ' + [e].[Surname])
LEFT JOIN [dbo].[Client] AS [c] ON [cte].[ClientId] = ([c].[Name] + ' ' + [c].[Surname])
LEFT JOIN [dbo].[Supplier] AS [s] ON [cte].[SupplierId] = ([s].[Name] + ' ' + [s].[Surname])

PRINT ('>> Completed > INSERT >> Test >> ContactDetail(s) > [dbo].[ContactDetail]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> Users(s) > Employee, Client, Supplier > [dbo].[User]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT [dbo].[User] ([EmployeeId], [ClientId], [SupplierId], [EmailAddress],[PasswordHash],[UserTypeId],[IsAdmin],[IsLocked],[Avatar],[IsActive],[CreatedBy])
SELECT
	[e].[_id] AS [EmployeeId]
	,[c].[_id] AS [ClientId]
	,[s].[_id] AS [SupplierId]
	,[EmailAddress]
	,'66c7ba6b2e0c67e2c88bd054334996e0/fc5d35d618c0a2b71a9a9a9719962b9b17ebae00516de2304ea72a160aef742d812cf169c154722659ffe3d0e49e085b365af7a8e4442ed77bf5a74992f0e2b4' AS [PasswordHash]
	,[UserTypeId]
	,0 AS [IsAdmin]
	,ISNULL([e].[IsTerminated], 0) AS [IsLocked]
	,CASE
		WHEN [EmailAddress] IN ('info@thandindabaattorneys.co.za') THEN './assets/img/avatars/avatar-8.png'
		WHEN [EmailAddress] IN ('info@closecorporation.co.za') THEN './assets/img/avatars/avatar-14.png'
		WHEN [EmailAddress] IN ('info@privatecompany.co.za') THEN './assets/img/avatars/avatar-3.png'
		WHEN [EmailAddress] IN ('Bad.Job@genio.idas.co.za') THEN './assets/img/avatars/avatar-19.png'
		WHEN [EmailAddress] IN ('Good.Job@genio.idas.co.za') THEN './assets/img/avatars/avatar-22.png'
		WHEN [EmailAddress] IN ('Jane.Doe@genio.idas.co.za') THEN './assets/img/avatars/avatar-20.png'
		WHEN [EmailAddress] IN ('Joe.Soap@genio.idas.co.za') THEN './assets/img/avatars/avatar-15.png'
		WHEN [EmailAddress] IN ('John.Doe@genio.idas.co.za') THEN './assets/img/avatars/avatar-23.png'
	END AS [Avatar]
	,CASE
		WHEN [e].[_id] IS NOT NULL THEN
			CASE
				WHEN ISNULL([e].[IsTerminated], 0) <> 0 THEN 0
				ELSE [e].[IsActive]
			END
		WHEN [c].[_id] IS NOT NULL THEN [c].[IsActive]
		WHEN [s].[_id] IS NOT NULL THEN [s].[IsActive]
		ELSE 0
	END AS [IsActive]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[ContactDetail] AS [cd]
LEFT JOIN [dbo].[Employee] AS [e] ON ([cd].[EmployeeId] = [e].[_id])
LEFT JOIN [dbo].[Client] AS [c] ON ([cd].[ClientId] = [c].[_id])
LEFT JOIN [dbo].[Supplier] AS [s] ON ([cd].[SupplierId] = [s].[_id])
JOIN (
	SELECT
		[lv].[_id] AS [UserTypeId]
		,[lv].[Value] AS [UserType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'UserType')
		AND ([lv].[Value] IN ('Employee', 'Client', 'Supplier'))
) AS [ut] ON (
	-- Employee
	(
		[cd].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za', 'John.Doe@genio.idas.co.za', 'Joe.Soap@genio.idas.co.za', 'Bad.Job@genio.idas.co.za', 'Good.Job@genio.idas.co.za')
		AND [ut].[UserType] IN ('Employee')
	)
	-- Client
	OR (
		[cd].[EmailAddress] IN ('info@closecorporation.co.za', 'info@privatecompany.co.za')
		AND [ut].[UserType] IN ('Client')
	)
	-- Supplier
	OR (
		[cd].[EmailAddress] IN ('info@thandindabaattorneys.co.za') AND [ut].[UserType] IN ('Supplier')
	)
);

PRINT ('>> Completed > INSERT >> Test >> Users(s) > Employee, Client, Supplier > [dbo].[User]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> Users(s), Group(s) > Employee, Client, Supplier > [dbo].[UserGroup]
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [dbo].[UserGroup] ([UserId],[GroupId],[CreatedBy])
SELECT
	[u].[_id] AS [UserId]
	,[g].[GroupId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[User] AS [u]
JOIN (
	SELECT
		[lv].[_id] AS [GroupId]
		,[lv].[Value] AS [Group]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Group')
) AS [g] ON (
	-- Administrators, Employees, Managers
	(
		[u].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za', 'John.Doe@genio.idas.co.za')
		AND [g].[Group] IN ('Administrators', 'Employees', 'Managers')
	)
	-- Clients
	OR (
		[u].[EmailAddress] IN ('info@closecorporation.co.za', 'info@privatecompany.co.za')
		AND [g].[Group] IN ('Clients')
	)
	-- Employees
	OR (
		[u].[EmailAddress] IN ('Joe.Soap@genio.idas.co.za', 'Bad.Job@genio.idas.co.za', 'Good.Job@genio.idas.co.za')
		AND [g].[Group] IN ('Employees')
	)
	-- Suppliers
	OR (
		[u].[EmailAddress] IN ('info@thandindabaattorneys.co.za')
		AND [g].[Group] IN ('Suppliers')
	)
)

PRINT ('>> Completed > INSERT >> Test >> Users(s), Group(s) > Employee, Client, Supplier > [dbo].[UserGroup]')
GO

-- ==============================================================================================================================
-- Setup >> Test >> Project(s)
-- ==============================================================================================================================
-- Project(s) - Start and End Date(s)
DECLARE @TestProject1DateCreated DATETIME = (DATEADD(MONTH, -4, GETDATE()));
DECLARE @TestProject2DateCreated DATETIME = (DATEADD(MONTH, -2, '3 MAY 2021'));
DECLARE @TestProject3DateCreated DATETIME = (DATEADD(MONTH, -1, '23 JANUARY 2021'));

-- Assignee(s)
DECLARE @TestAssignees TABLE (
[UserId] [bigint] NOT NULL,
[EmailAddress] [nvarchar](320) NOT NULL
);

INSERT INTO [dbo].[Project] ([Name],[Code],[Description],[ProjectTypeId],[PriorityId],[StartDate],[EndDate],[CreatedBy],[DateCreated])
SELECT
	[Name]
	,[Code]
	,[Description]
	,[type].[ProjectTypeId]
	,[priority].[PriorityId]
	,CONVERT(VARCHAR, [StartDate], 23) AS [StartDate]
	,CONVERT(VARCHAR, [EndDate], 23) AS [EndDate]
	,1 AS [CreatedBy]
	,[StartDate] AS [DateCreated]
FROM (
SELECT 'Test Project 1' AS [Name], 'TP1' AS [Code], 'Test Project 1' AS [Description], @TestProject1DateCreated AS [StartDate], (DATEADD(YEAR, 2, @TestProject1DateCreated)) AS [EndDate] UNION
SELECT 'Test Project 2' AS [Name], 'TP2' AS [Code], 'Test Project 2' AS [Description], @TestProject2DateCreated AS [StartDate], (DATEADD(MONTH, 8, @TestProject2DateCreated)) AS [EndDate] UNION
SELECT 'Test Project 3' AS [Name], 'TP3' AS [Code], 'Test Project 3' AS [Description], @TestProject3DateCreated AS [StartDate], (DATEADD(WEEK, 67, @TestProject3DateCreated)) AS [EndDate]
) AS [prj]
LEFT JOIN (
	SELECT
		[lv].[_id] AS [ProjectTypeId]
		,[lv].[Value] AS [ProjectType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'ProjectType')
		AND ([lv].[Value] IN ('Construction', 'Research', 'Outreach'))
) AS [type] ON (
	(([prj].[Name] IN ('Test Project 1')) AND ([type].[ProjectType]) IN ('Construction'))
	OR (([prj].[Name] IN ('Test Project 2')) AND ([type].[ProjectType]) IN ('Outreach'))
	OR (([prj].[Name] IN ('Test Project 3')) AND ([type].[ProjectType]) IN ('Research'))
)
LEFT JOIN (
	SELECT
		[lv].[_id] AS [PriorityId]
		,[lv].[Value] AS [PriorityType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Priority')
		AND ([lv].[Value] IN ('Normal', 'High', 'Medium'))
) AS [priority] ON (
	(([prj].[Name] IN ('Test Project 1')) AND ([priority].[PriorityType]) IN ('High'))
	OR (([prj].[Name] IN ('Test Project 2')) AND ([priority].[PriorityType]) IN ('Medium'))
	OR (([prj].[Name] IN ('Test Project 3')) AND ([priority].[PriorityType]) IN ('Normal'))
)

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[Project]')

-- ==============================================================================================================================
-- Setup >> Test >> Project File Attachment(s)
-- ==============================================================================================================================
INSERT INTO [dbo].[FileAttachment]([ProjectId], [FileName], [FileSize], [CreatedBy])
SELECT
	[p].[_id] AS [ProjectId]
	,[FileName]
	,[FileSize]
	,[p].[CreatedBy]
FROM [dbo].[Project] AS [p]
CROSS JOIN (
SELECT 'Izingodla - Test Project Documentation.doc' AS [FileName], 9123  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.docx' AS [FileName], 3456789  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.pdf' AS [FileName], 9876543  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.xls' AS [FileName], 56765432  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.xlsx' AS [FileName], 98712654  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.txt' AS [FileName], 4562378  AS [FileSize]
) AS [fa]

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[FileAttachment]')

-- ==============================================================================================================================
-- Setup >> Test >> Project Assignee(s)
-- ==============================================================================================================================
INSERT INTO @TestAssignees
SELECT
	[u].[_id] AS [UserId]
	,[u].[EmailAddress]
FROM (
SELECT 'Jane.Doe@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'John.Doe@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'Bad.Job@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'Joe.Soap@genio.idas.co.za' AS [EmailAddress] UNION
SELECT 'Good.Job@genio.idas.co.za' AS [EmailAddress]
) AS [TestAssignees]
JOIN [dbo].[User] AS [u] ON ([TestAssignees].[EmailAddress] = [u].[EmailAddress]);

PRINT ('>> Completed > INSERT >> Test Data > Project, Task > @TestAssignees')

-- ==============================================================================================================================
-- Setup >> Test >> Project Assignment(s)
-- ==============================================================================================================================
INSERT INTO [dbo].[ProjectAssignment] ([ProjectId],[ProjectAssignmentTypeId],[AssigneeId],[CreatedBy],[DateCreated])
SELECT
	[p].[_id] AS [ProjectId]
	,[ProjectAssignmentTypeId]
	,[pa].[UserId] AS [AssigneeId]
	,1 AS [CreatedBy]
	,(DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [p].[DateCreated])))))) AS [DateCreated]
FROM [dbo].[Project] AS [p]
LEFT JOIN (
	SELECT
		[UserId]
		,[EmailAddress]
		,[pat].[ProjectAssignmentTypeId]
		,[pat].[ProjectAssignmentType]
	FROM @TestAssignees
	CROSS JOIN (
		SELECT
			[lv].[_id] AS [ProjectAssignmentTypeId]
			,[lv].[Value] AS [ProjectAssignmentType]
		FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
		WHERE
			([lv].[LookupCategoryId] = [lc].[_id])
			AND ([lc].[Name] = 'ProjectAssignmentType')
	) AS [pat]
) AS [pa] ON (
	-- Project Manager(s)
	(
		[p].[Name] IN ('Test Project 1') AND [pa].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
	)
	OR (
		[p].[Name] IN ('Test Project 2') AND [pa].[EmailAddress] IN ('John.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
	)
	OR (
		[p].[Name] IN ('Test Project 3') AND [pa].[EmailAddress] IN ('Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Project Manager')
	)
	-- Business Analyst(s)
	OR (
		[p].[Name] IN ('Test Project 1') AND [pa].[EmailAddress] IN ('Jane.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
	)
	OR (
		[p].[Name] IN ('Test Project 2') AND [pa].[EmailAddress] IN ('Bad.Work@genio.idas.co.za', 'Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
	)
	OR (
		[p].[Name] IN ('Test Project 3') AND [pa].[EmailAddress] IN ('Good.Job@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Business Analyst')
	)
	-- Senior Engineer(s)
	OR (
		[p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3') AND [pa].[EmailAddress] IN ('John.Doe@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Senior Engineer')
	)
	-- Engineer(s)
	OR (
		[p].[Name] IN ('Test Project 1', 'Test Project 2') AND [pa].[EmailAddress] IN ('Joe.Soap@genio.idas.co.za') AND [pa].[ProjectAssignmentType] IN ('Engineer')
	)
);

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[ProjectAssignment]')

-- ==============================================================================================================================
-- Setup >> Test >> Update Test Project(s) > CreatedBy
-- ==============================================================================================================================
UPDATE [p]
SET
	[CreatedBy] = [pa].[AssigneeId]
	,[ModifiedBy] = [pa].[AssigneeId]
	,[DateModified] = GETDATE()
FROM [dbo].[Project] AS [p]
JOIN [dbo].[ProjectAssignment] AS [pa] ON ([p].[_id] = [pa].[ProjectId])
JOIN [dbo].[LookupValue] AS [lv] ON ([pa].[ProjectAssignmentTypeId] = [lv].[_id])
WHERE
	([lv].[Value] = 'Project Manager');

PRINT ('>> Completed > UPDATE >> Test Data > [dbo].[Project] > [CreatedBy]')

-- ==============================================================================================================================
-- Setup >> Test >> Update Test Project Assignment(s) > CreatedBy
-- ==============================================================================================================================
UPDATE [pa]
SET
	[CreatedBy] = [tpacb].[AssigneeId]
	,[ModifiedBy] = [pa].[AssigneeId]
	,[DateModified] = GETDATE()
FROM [dbo].[ProjectAssignment] AS [pa]
LEFT JOIN (
	SELECT
		[tpa].[ProjectId]
		,[AssigneeId]
		,[p].[Name] AS [ProjectName]
		,[lv].[Value] AS [ProjectAssignmentType]
	FROM [dbo].[ProjectAssignment] AS [tpa]
	JOIN [dbo].[Project] AS [p] ON ([p].[_id] = [tpa].[ProjectId])
	JOIN [dbo].[LookupValue] AS [lv] ON ([tpa].[ProjectAssignmentTypeId] = [lv].[_id])
) AS [tpacb] ON (
	-- Assignment > Created By > Project Manager
	(
		([pa].[ProjectId] = [tpacb].[ProjectId])
		AND ([tpacb].[ProjectName] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
		AND ([tpacb].[ProjectAssignmentType] IN ('Project Manager'))
	)
);

PRINT ('>> Completed > UPDATE >> Test Data > [dbo].[ProjectAssignment] > [CreatedBy]')

-- ==============================================================================================================================
-- Setup >> Test >> Project Status(es)
-- ==============================================================================================================================
INSERT INTO [dbo].[ProjectStatus] ([ProjectId],[StatusId],[CreatedBy],[DateCreated])
SELECT
	[p].[_id] AS [ProjectId]
	,[StatusId]
	,CASE
		WHEN [ps].[StatusName] IN ('Created', 'Not Started')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Started')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('On Hold')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Cancelled')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('In Progress')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Completed')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Blocked')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		WHEN [ps].[StatusName] IN ('Done')
			THEN ISNULL([tpa].[AssigneeId], [tpa].[CreatedBy])
		ELSE [tpa].[AssigneeId]
	END AS [CreatedBy]
	,CASE
		WHEN [ps].[StatusName] IN ('Created', 'Not Started')
			THEN [p].[DateCreated]
		WHEN [ps].[StatusName] IN ('Started')
			THEN (DATEADD(HOUR, (91 % 5), (DATEADD(MINUTE, (87 % 3), [tpa].[DateCreated]))))
		WHEN [ps].[StatusName] IN ('On Hold')
			THEN (DATEADD(MONTH, 2, [tpa].[DateCreated]))
		WHEN [ps].[StatusName] IN ('Cancelled')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('In Progress')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('Completed')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('Blocked')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		WHEN [ps].[StatusName] IN ('Done')
			THEN (DATEADD(MONTH, (9999 % 7), DATEADD(WEEK, (9999 % 5), DATEADD(DAY, (999 % 23), DATEADD(HOUR, (99 % 4), DATEADD(MINUTE, (9 % 5), [tpa].[DateCreated]))))))
		ELSE [tpa].[DateCreated]
	END AS [DateCreated]
FROM [dbo].[Project] AS [p]
LEFT JOIN [dbo].[ProjectAssignment] AS [tpa] ON ([p].[_id] = [tpa].[ProjectId])
LEFT JOIN [dbo].[LookupValue] AS [lvpa] ON ([tpa].[ProjectAssignmentTypeId] = [lvpa].[_id])
LEFT JOIN (
	SELECT
		[lv].[_id] AS [StatusId]
		,[lv].[Value] AS [StatusName]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'Status')
) AS [ps] ON (
	-- Project >> Status >> Created, Not Started > By Project Manager
	(
		([p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
		AND ([ps].[StatusName] IN ('Created', 'Not Started'))
		AND ([lvpa].[Value] IN ('Project Manager'))
	)
	-- Project >> Status >> Started > By Project Manager
	OR (
		([p].[Name] IN ('Test Project 1', 'Test Project 2'))
		AND ([ps].[StatusName] IN ('Started'))
		AND ([lvpa].[Value] IN ('Project Manager'))
	)
	-- Project >> Status >> Started > By Business Analyst
	OR (
		([p].[Name] IN ('Test Project 3'))
		AND ([ps].[StatusName] IN ('Started'))
		AND ([lvpa].[Value] IN ('Business Analyst'))
	)
	-- Project >> Status >> On Hold, Cancelled > By Project Manager, Senior Engineer, Business Analyst, Engineer
	OR (
		([p].[Name] IN ('Test Project 2'))
		AND ([ps].[StatusName] IN ('On Hold', 'Cancelled'))
		AND ([lvpa].[Value] IN ('Project Manager', 'Senior Engineer', 'Business Analyst', 'Engineer'))
	)
	-- Project >> Status >> On Hold > By Senior Engineer
	OR (
		([p].[Name] IN ('Test Project 3'))
		AND ([ps].[StatusName] IN ('On Hold'))
		AND ([lvpa].[Value] IN ('Senior Engineer'))
	)
	-- Project >> Status >> In Progress > By Business Analyst
	OR (
		([p].[Name] IN ('Test Project 1', 'Test Project 2', 'Test Project 3'))
		AND ([ps].[StatusName] IN ('In Progress'))
		AND ([lvpa].[Value] IN ('Business Analyst'))
	)
	-- Project >> Status >> Completed > By Senior Engineer, Engineer
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([ps].[StatusName] IN ('Completed'))
		AND ([lvpa].[Value] IN ('Senior Engineer', 'Engineer'))
	)
	-- Project >> Status >> Blocked, Done > By Business Analyst
	OR (
		([p].[Name] IN ('Test Project 1'))
		AND ([ps].[StatusName] IN ('Blocked', 'Done'))
		AND ([lvpa].[Value] IN ('Business Analyst'))
	)
);

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[ProjectStatus]')

-- ==============================================================================================================================
-- Setup >> Test >> Project Task(s)
-- ==============================================================================================================================
INSERT INTO [dbo].[Task] ([ProjectId],[Name],[Description],[TaskTypeId],[PriorityId],[CreatedBy],[DateCreated])
SELECT DISTINCT
	[pa].[ProjectId]
	,'As a ' + [lvpa].[Value] + ', I want to ' + [lvps].[Value] + ' on the ' + [p].[Name] + ' project' AS [Name]
	,[lvps].[Value] + ' on the ' + [p].[Name] + ' project' AS [Description]
	,[type].[TaskTypeId]
	,[p].[PriorityId]
	,[pa].[AssigneeId] AS [CreatedBy]
	,[ps].[DateCreated]
FROM [dbo].[ProjectAssignment] AS [pa]
JOIN [dbo].[LookupValue] AS [lvpa] ON ([pa].[ProjectAssignmentTypeId] = [lvpa].[_id])
JOIN [dbo].[Project] AS [p] ON ([pa].[ProjectId] = [p].[_id])
JOIN [dbo].[ProjectStatus] AS [ps] ON ([pa].[AssigneeId] = [ps].[CreatedBy])
JOIN [dbo].[LookupValue] AS [lvps] ON ([ps].[StatusId] = [lvps].[_id])
LEFT JOIN (
	SELECT
		[lv].[_id] AS [TaskTypeId]
		,[lv].[Value] AS [TaskType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'TaskType')
) AS [type] ON (
	(([lvpa].[Value] IN ('Project Manager')) AND ([type].[TaskType] IN ('Consultation')))
	OR (([lvpa].[Value] IN ('Business Analyst')) AND ([type].[TaskType] IN ('Planning')))
	OR (([lvpa].[Value] IN ('Senior Engineer')) AND ([type].[TaskType] IN ('Development')))
	OR (([lvpa].[Value] IN ('Engineer')) AND ([type].[TaskType] IN ('Development')))
);

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[Task]')

-- ==============================================================================================================================
-- Setup >> Test >> Project Task Assignment(s)
-- ==============================================================================================================================
INSERT INTO [dbo].[TaskAssignment] ([TaskId],[AssigneeId],[CreatedBy],[DateCreated])
SELECT DISTINCT
	[_id] AS [TaskId]
	,[CreatedBy] AS [AssigneeId]
	,[CreatedBy]
	,[DateCreated]
FROM [dbo].[Task];

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[TaskAssignment]')

-- ==============================================================================================================================
-- Setup >> Test >> Project File Attachment(s)
-- ==============================================================================================================================
INSERT INTO [dbo].[FileAttachment]([TaskId], [FileName], [FileSize], [CreatedBy])
SELECT
	[ta].[_id] AS [TaskId]
	,[FileName]
	,[FileSize]
	,[ta].[AssigneeId]
FROM [dbo].[TaskAssignment] AS [ta]
CROSS JOIN (
SELECT 'Izingodla - Test Project Documentation.doc' AS [FileName], 9123  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.docx' AS [FileName], 3456789  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.pdf' AS [FileName], 9876543  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.xls' AS [FileName], 56765432  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.xlsx' AS [FileName], 98712654  AS [FileSize] UNION ALL
SELECT 'Izingodla - Test Project Documentation.txt' AS [FileName], 4562378  AS [FileSize]
) AS [fa]

-- ==============================================================================================================================
-- Setup >> Test >> Project Task Status(es)
-- ==============================================================================================================================
INSERT INTO [dbo].[TaskStatus] ([TaskId],[StatusId],[CreatedBy],[DateCreated])
SELECT DISTINCT
	[tsk].[_id] AS [TaskId]
	,[psts].[StatusId]
	,[tska].[CreatedBy]
	,[psts].[DateCreated]
FROM [dbo].[Task] AS [tsk]
JOIN [dbo].[TaskAssignment] AS [tska] ON ([tsk].[_id] = [tska].[TaskId])
JOIN [dbo].[ProjectStatus] AS [psts] ON ([tsk].[ProjectId] = [psts].[ProjectId]);

PRINT ('>> Completed > INSERT >> Test Data > [dbo].[TaskStatus]')

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> Calendar Event(s) > ([dbo].[CalendarEvent])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
;WITH [dateVars] AS (
	SELECT
		DATEADD(yy, DATEDIFF(yy, 0, GETDATE()), 0) AS [FirstDayOfCurrentYear]
		,DATEADD(dd, -1, DATEADD(yy, DATEDIFF(yy, 0, GETDATE()) + 1, 0)) AS [LastDayOfCurrentYear]
)
, [daysIn] AS (
	SELECT
		DATEDIFF(DAY, [FirstDayOfCurrentYear], [LastDayOfCurrentYear]) AS [Days]
	FROM [dateVars]
)
, [dates] AS (
	SELECT
		1 AS [DayAdd]
		,(RAND(CHECKSUM(NEWID())) * [Days] + [FirstDayOfCurrentYear]) AS [StartDate]
		,(RAND(CHECKSUM(NEWID())) * [Days] + [FirstDayOfCurrentYear]) AS [EndDate]
	FROM [dateVars], [daysIn]
	UNION ALL
	SELECT
		([DayAdd] + 1) AS [DayAdd]
		,(RAND(CHECKSUM(NEWID())) * [DayAdd] + [StartDate]) AS [StartDate]
		,(RAND(CHECKSUM(NEWID())) * [DayAdd] + [StartDate]) AS [EndDate]
	FROM [dateVars], [daysIn], [dates]
	WHERE
		([StartDate] <= DATEADD(DAY, 200, [LastDayOfCurrentYear]))
)
INSERT INTO [dbo].[CalendarEvent]([CalendarEventTypeId],[Title],[Description],[Location],[IsAllDayEvent],[StartDate],[EndDate],[CreatedBy])
SELECT
	[CalendarEventTypeId]
	,CONCAT([CalendarEventType], ' Meeting') AS [Title]
	,CONCAT([CalendarEventType], ' Meeting') AS [Description]
	,'Teams Meeting' AS [Location]
	,1 AS [IsAllDayEvent]
	,[StartDate]
	,[EndDate]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM (
	SELECT
		CASE WHEN [EndDate] > [StartDate] THEN [StartDate] ELSE [EndDate] END [StartDate]
		,CASE WHEN [StartDate] > [EndDate] THEN [StartDate] ELSE [EndDate] END [EndDate]
	FROM [dates]
) AS [dates]
CROSS JOIN (
	SELECT
		[lv].[_id] AS [CalendarEventTypeId]
		,[lv].[Value] AS [CalendarEventType]
	FROM [dbo].[LookupValue] AS [lv], [dbo].[LookupCategory] AS [lc]
	WHERE
		([lv].[LookupCategoryId] = [lc].[_id])
		AND ([lc].[Name] = 'CalendarEventType')
) AS [cet]
OPTION (MAXRECURSION 9999);

GO
PRINT ('>> Completed > INSERT >> Test Data > [dbo].[CalendarEvent]')
GO

-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
-- INSERT >> Test >> Calendar Event(s), Attendee (Administrator, Employee, Client, Supplier) > ([dbo].[CalendarEventAttendee])
-- ---------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [dbo].[CalendarEventAttendee]([CalendarEventId], [AttendeeId], [CreatedBy])
SELECT
	[ce].[_id] AS [CalendarEventId]
	,[u].[_id] AS [AttendeeId]
	,(SELECT [_id] FROM [dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [dbo].[CalendarEvent] AS [ce]
JOIN [dbo].[LookupValue] AS [cet] ON ([ce].[CalendarEventTypeId] = [cet].[_id])
JOIN [dbo].[User] AS [u] ON (
	-- Action Review
	([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Action Review') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	-- Board
	OR ([cet].[Value] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Board') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za'))
	-- Broadcast
	-- Community of Practice
	-- Consultation
	OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Consultation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	-- Decision Making
	-- Governance
	OR ([cet].[Value] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	-- Idea Generation
	OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Idea Generation') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	-- Interview
	OR ([cet].[Value] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'good.job@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Interview') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	-- Introductions
	OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
	OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
	OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
	OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@closecorporation.co.za', 'info@thandindabaattorneys.co.za'))
	OR ([cet].[Value] IN ('Introductions') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za', 'info@privatecompany.co.za', 'info@thandindabaattorneys.co.za'))
	-- Issue Resolution
	OR ([cet].[Value] IN ('Issue Resolution') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@thandindabaattorneys.co.za'))
	-- One-on-One
	OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za'))
	-- Planning
	OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Planning') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	-- Problem Solving
	-- Progress Check
	OR ([cet].[Value] IN ('Governance') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	-- Sensemaking
	-- Site Visit
	-- Team Cadence
	OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
	OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@closecorporation.co.za'))
	OR ([cet].[Value] IN ('Team Cadence') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'good.job@genio.idas.co.za', 'info@privatecompany.co.za'))
	-- Training
	-- Workshop
	OR ([cet].[Value] IN ('Workshop') AND [u].[EmailAddress] IN ('jane.doe@genio.idas.co.za', 'john.doe@genio.idas.co.za', 'bad.job@genio.idas.co.za', 'good.job@genio.idas.co.za', 'joe.soap@genio.idas.co.za'))
);

GO
PRINT ('>> Completed > INSERT >> Test Data > [dbo].[CalendarEventAttendee]')
GO

PRINT ('>> Completed > INSERT >> Default Data Setup')
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
USE [IdasGenioDb];

SELECT '[dbo].[Employee]' AS [TableName], * FROM [dbo].[Employee]
SELECT '[dbo].[Client]' AS [TableName], * FROM [dbo].[Client]
SELECT '[dbo].[Supplier]' AS [TableName], * FROM [dbo].[Supplier]
SELECT '[dbo].[ContactDetail]' AS [TableName], * FROM [dbo].[ContactDetail]
SELECT '[dbo].[User]' AS [TableName], * FROM [dbo].[User]
SELECT '[dbo].[UserGroup]' AS [TableName], * FROM [dbo].[UserGroup]
SELECT '[dbo].[MenuItem]' AS [TableName], * FROM [dbo].[MenuItem]
SELECT '[dbo].[GroupMenuItem]' AS [TableName], * FROM [dbo].[GroupMenuItem]
SELECT '[dbo].[UserTypeMenuItem]' AS [TableName], * FROM [dbo].[UserTypeMenuItem]
SELECT '[dbo].[Project]' AS [TableName], * FROM [dbo].[Project]
SELECT '[dbo].[ProjectAssignment]' AS [TableName], * FROM [dbo].[ProjectAssignment]
SELECT '[dbo].[ProjectStatus]' AS [TableName], * FROM [dbo].[ProjectStatus]
SELECT '[dbo].[Task]' AS [TableName], * FROM [dbo].[Task]
SELECT '[dbo].[TaskAssignment]' AS [TableName], * FROM [dbo].[TaskAssignment]
SELECT '[dbo].[TaskStatus]' AS [TableName], * FROM [dbo].[TaskStatus]
SELECT '[dbo].[CalendarEvent]' AS [TableName], * FROM [dbo].[CalendarEvent]
SELECT '[dbo].[CalendarEventAttendee]' AS [TableName], * FROM [dbo].[CalendarEventAttendee]
SELECT '[dbo].[FileAttachment]' AS [TableName], * FROM [dbo].[FileAttachment]
SELECT '[dbo].[EntityChangeHistory]' AS [TableName], * FROM [dbo].[EntityChangeHistory]

PRINT ('>> Done')
GO