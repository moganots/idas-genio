WITH Tally (n) AS
(
    SELECT TOP (24)
        ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) - 1                   -- zero-based
    -- Returns exactly 86400 rows (number of seconds in a day)
    FROM       (VALUES(0),(0),(0),(0),(0),(0))                         a(n) -- 6 rows 
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) b(n) -- x12 rows
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) c(n) -- x12 rows
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0))         d(n) -- x10 rows
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0))         e(n) -- x10 rows
)                                                                           -- = 86,400 rows
-- 24 time slots, one for each hour of the day
SELECT TimeSlot=DATEADD(hour, n, CAST('00:00' AS TIME))
FROM Tally;
 
WITH Tally (n) AS
(
    SELECT
        ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) - 1                   -- zero-based
    -- Returns exactly 86400 rows (number of seconds in a day)
    FROM       (VALUES(0),(0),(0),(0),(0),(0))                         a(n) -- 6 rows 
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) b(n) -- x12 rows
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)) c(n) -- x12 rows
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0))         d(n) -- x10 rows
    CROSS JOIN (VALUES(0),(0),(0),(0),(0),(0),(0),(0),(0),(0))         e(n) -- x10 rows
)                                                                           -- = 86,400 rows
-- 3600 time slots, one for each minute of the day
SELECT TimeSlot=DATEADD(minute, n, CAST('00:00' AS TIME))
FROM Tally;