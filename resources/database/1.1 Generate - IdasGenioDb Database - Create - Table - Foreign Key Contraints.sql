USE [IdasGenioDb];
GO

DECLARE @TableName NVARCHAR(255);
DECLARE Cursor_Table_Names CURSOR FOR SELECT [name] FROM [sys].[tables];

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
		AND ([ac].[name] NOT IN ('_id', 'IdNumber', 'VATNumber', 'HomeTelephoneNumber', 'OfficeTelephoneNumber', 'MobileTelephoneNumber', 'Amount', 'AccountNumber'))
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
		ELSE IF(@ColumnName IN ('CreatedBy', 'ModifiedBy', 'UserId', 'AssigneeId', 'PreviousAssigneeId', 'LoggedBy'))
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
		ELSE IF(@ColumnName IN ('ProjectId'))
		BEGIN
			SET @ReferenceTableName = 'Project';
			SET @ForeignKeyConstraintName = '[FK_' + @TableName + '_' + @ReferenceTableName + '_' + @ColumnName + ']';
		END
		-- Task
		ELSE IF(@ColumnName IN ('TaskId', 'SubTaskId'))
		BEGIN
			SET @ReferenceTableName = 'Task';
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
			SET @ReferenceTableName = 'LookupCategory';
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