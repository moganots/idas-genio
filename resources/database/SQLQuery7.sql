--Generating Random Dates with Times

--===== Conditionally drop the test table to make reruns easier.

     IF OBJECT_ID('tempdb..#SomeTestTable','U') IS NOT NULL

        DROP TABLE #SomeTestTable

--===== Declare some obviously named variables

DECLARE @NumberOfRows INT,

        @StartDate    DATETIME,

        @EndDate      DATETIME,

        @Days         INT --This is still the "range"

--===== Preset the variables to known values

SELECT @NumberOfRows = 1000000,

        @StartDate    = '2021', --Inclusive

        @EndDate      = '2022', --Exclusive

        @Days         = DATEDIFF(dd,@StartDate,@EndDate)

--===== Create the test table with "random constrained" integers and floats

     -- within the parameters identified in the variables above.

SELECT TOP (@NumberOfRows)

        SomeRandomDateTime = RAND(CHECKSUM(NEWID())) * @Days + @StartDate

   INTO #SomeTestTable

   FROM sys.all_columns ac1

  CROSS JOIN sys.all_columns ac2

--Here's the code that checks the extent of the random data.  

--===== Show the extent of the random whole dates

SELECT MinDateTime   = MIN(SomeRandomDateTime),

        MaxDateTime   = MAX(SomeRandomDateTime),

        DistinctDates = COUNT(DISTINCT SomeRandomDateTime),

        Rows = COUNT(*)

   FROM #SomeTestTable

--===== Show ten rows of the table

SELECT *

   FROM #SomeTestTable


   