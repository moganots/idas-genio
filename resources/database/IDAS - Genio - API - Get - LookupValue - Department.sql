select
	LTRIM(RTRIM([department])) AS [department]
FROM (
SELECT 'Accounting' AS [department] UNION
SELECT 'Finance' AS [department] UNION
SELECT 'Sales' AS [department] UNION
SELECT 'Research and Development' AS [department] UNION
SELECT 'IT' AS [department] UNION
SELECT 'Management' AS [department] UNION
SELECT 'Administration' AS [department] UNION
SELECT 'Customer Service' AS [department] UNION
SELECT 'Customer Support' AS [department] UNION
SELECT 'Technical Support' AS [department] UNION
SELECT 'Marketing' AS [department] UNION
SELECT 'Logistics' AS [department] UNION
SELECT 'Operations' AS [department] UNION
SELECT 'Planning' AS [department] UNION
SELECT 'Human Resources' AS [department] UNION
SELECT 'Purchasing' AS [department] UNION
SELECT 'Quality Assurance' AS [department] UNION
SELECT 'Engineering' AS [department] UNION
SELECT 'Export' AS [department] UNION
SELECT 'Shipping' AS [department] UNION
SELECT 'Public Relations' AS [department] UNION
SELECT 'Production' AS [department] UNION
SELECT 'Supervision' AS [department] UNION
SELECT 'Product Quality' AS [department] UNION
SELECT 'Inventory' AS [department] UNION
SELECT 'Human Resources' AS [department] UNION
SELECT 'Finance' AS [department] UNION
SELECT 'Sales' AS [department] UNION
SELECT 'Marketing' AS [department] UNION
SELECT 'Legal' AS [department] UNION
SELECT 'General Services' AS [department] UNION
SELECT 'Transportation' AS [department] UNION
SELECT 'Business Development' AS [department] UNION
SELECT 'Customer Service' AS [department] UNION
SELECT 'Management' AS [department] UNION
SELECT 'Administration' AS [department] UNION
SELECT 'Manufacturing' AS [department] UNION
SELECT 'Operations' AS [department] UNION
SELECT 'Communications' AS [department] UNION
SELECT 'Procurement' AS [department] UNION
SELECT 'Learning, Training and Development' AS [department] UNION
SELECT 'Health and Safety' AS [department]
) [departments]