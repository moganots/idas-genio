USE [IdaDB_v2];
GO

;WITH [cte] ([LookupCategory], [Value]) AS
(
SELECT 'BudgetCode' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'Capacity' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Human Resources' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Finance' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Sales' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Marketing' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Legal' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Research and Development' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'IT Support' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'General Services' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Transportation' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Business Development' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Customer Services' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Management' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Administration' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Manufacturing' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Operations' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Communications' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Procurement' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Learning, Training and Development' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Health and Safety' AS [Value] UNION
SELECT 'Department' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Permanent' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Part-Time' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Temporary' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Seasonal' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Indipendent Contractor' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Freelancer' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Consultant' AS [Value] UNION
SELECT 'EmploymentType' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'Gender' AS [LookupCategory],'Female' AS [Value] UNION
SELECT 'Gender' AS [LookupCategory],'Male' AS [Value] UNION
SELECT 'Gender' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'Group' AS [LookupCategory],'Administrators' AS [Value] UNION
SELECT 'Group' AS [LookupCategory],'Clients' AS [Value] UNION
SELECT 'Group' AS [LookupCategory],'Employees' AS [Value] UNION
SELECT 'Group' AS [LookupCategory],'General' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Abortion Policy/Anti-Abortion' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Abortion Policy/Pro-Abortion Rights' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Accountants' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Advertising/Public Relations' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Aerospace, Defense Contractors' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Agribusiness' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Agricultural Services & Products' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Agriculture' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Air Transport' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Air Transport Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Airlines' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Alcoholic Beverages' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Alternative Energy Production & Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Architectural Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Attorneys/Law Firms' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Auto Dealers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Auto Dealers, Japanese' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Auto Manufacturers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Automotive' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Banking, Mortgage' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Banks, Commercial' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Banks, Savings & Loans' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Bars & Restaurants' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Beer, Wine & Liquor' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Books, Magazines & Newspapers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Broadcasters, Radio/TV' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Builders/General Contractors' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Builders/Residential' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Building Materials & Equipment' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Building Trade Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Business Associations' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Business Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Cable & Satellite TV Production & Distribution' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Candidate Committees' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Candidate Committees, Democratic' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Candidate Committees, Republican' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Car Dealers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Car Dealers, Imports' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Car Manufacturers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Casinos / Gambling' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Cattle Ranchers/Livestock' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Chemical & Related Manufacturing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Chiropractors' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Civil Servants/Public Officials' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Clergy & Religious Organizations' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Clothing Manufacturing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Coal Mining' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Colleges, Universities & Schools' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Commercial Banks' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Commercial TV & Radio Stations' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Communications/Electronics' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Computer Software' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Conservative/Republican' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Construction' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Construction Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Construction Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Credit Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Crop Production & Basic Processing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Cruise Lines' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Cruise Ships & Lines' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Dairy' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Defense' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Defense Aerospace' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Defense Electronics' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Defense/Foreign Policy Advocates' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Democratic Candidate Committees' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Democratic Leadership PACs' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Democratic/Liberal' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Dentists' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Doctors & Other Health Professionals' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Drug Manufacturers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Education' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Electric Utilities' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Electronics Manufacturing & Equipment' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Electronics, Defense Contractors' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Energy & Natural Resources' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Entertainment Industry' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Environment' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Farm Bureaus' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Farming' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Finance / Credit Companies' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Finance, Insurance & Real Estate' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Food & Beverage' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Food Processing & Sales' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Food Products Manufacturing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Food Stores' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'For-profit Education' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'For-profit Prisons' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Foreign & Defense Policy' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Forestry & Forest Products' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Foundations, Philanthropists & Non-Profits' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Funeral Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Gambling & Casinos' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Gambling, Indian Casinos' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Garbage Collection/Waste Management' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Gas & Oil' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'General Contractors' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Government Employee Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Government Employees' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Gun Control' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Gun Rights' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Health' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Health Professionals' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Health Services/HMOs' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Hedge Funds' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'HMOs & Health Care Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Home Builders' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Hospitals & Nursing Homes' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Hotels, Motels & Tourism' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Human Rights' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Ideological/Single-Issue' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Indian Gaming' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Industrial Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Insurance' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Internet' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Israel Policy' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Labor' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Lawyers & Lobbyists' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Lawyers / Law Firms' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Leadership PACs' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'LGBTQIA Rights & Issues' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Liberal/Democratic' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Liquor, Wine & Beer' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Livestock' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Lobbyists' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Lodging / Tourism' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Logging, Timber & Paper Mills' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Manufacturing, Misc' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Marijuana' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Marijuana' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Marine Transport' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Meat processing & products' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Medical Supplies' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Mining' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Misc Business' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Misc Finance' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Misc Manufacturing & Distributing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Misc Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Miscellaneous Defense' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Miscellaneous Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Mortgage Bankers & Brokers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Motion Picture Production & Distribution' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Music Production' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Natural Gas Pipelines' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Newspaper, Magazine & Book Publishing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Non-profits, Foundations & Philanthropists' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Nurses' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Nursing Homes/Hospitals' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Nutritional & Dietary Supplements' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Oil & Gas' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Payday Lenders' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Pharmaceutical Manufacturing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Pharmaceuticals / Health Products' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Phone Companies' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Physicians & Other Health Professionals' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Postal Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Poultry & Eggs' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Power Utilities' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Printing & Publishing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Private Equity & Investment Firms' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Pro-Israel' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Professional Sports, Sports Arenas & Related Equipment & Services' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Progressive/Democratic' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Public Employees' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Public Sector Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Publishing & Printing' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Radio/TV Stations' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Railroads' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Real Estate' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Record Companies/Singers' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Recorded Music & Music Production' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Recreation / Live Entertainment' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Religious Organizations/Clergy' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Republican Candidate Committees' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Republican Leadership PACs' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Republican/Conservative' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Residential Construction' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Restaurants & Drinking Establishments' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Retail Sales' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Retired' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Savings & Loans' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Schools/Education' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Sea Transport' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Securities & Investment' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Special Trade Contractors' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Sports, Professional' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Steel Production' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Stock Brokers/Investment Industry' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Student Loan Companies' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Sugar Cane & Sugar Beets' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Teachers Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Teachers/Education' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Telecom Services & Equipment' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Telephone Utilities' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Textiles' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Timber, Logging & Paper Mills' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Tobacco' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Transportation' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Transportation Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Trash Collection/Waste Management' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Trucking' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'TV / Movies / Music' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'TV Production' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions, Airline' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions, Building Trades' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions, Industrial' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions, Misc' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions, Public Sector' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions, Teacher' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Unions, Transportation' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Universities, Colleges & Schools' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Vegetables & Fruits' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Venture Capital' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Waste Management' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Wine, Beer & Liquor' AS [Value] UNION
SELECT 'IndustryType' AS [LookupCategory],'Women''s Issues' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Project Manager' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Team Lead' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Technical Lead' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Supervisor' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'General' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Engineer' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Senior Engineer' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Supplier' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Client' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Business Analyst' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Client Liason' AS [Value] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'CEO' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'Managing Director' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'General Manager' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'Secretary' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'Clerk' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'Engineer' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'Senior Engineer' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'CFO' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'Personal Assistant' AS [Value] UNION
SELECT 'Position' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'Afrikaans' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'English' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'IsiNdebele' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'SePedi' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'SeSotho' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'IsiSwati' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'Tshonga' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'SeTswana' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'TshiVenda' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'IsiXhosa' AS [Value] UNION
SELECT 'PreferredLanguage' AS [LookupCategory],'IsiZulu' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'Eastern Cape' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'Free State' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'Gauteng' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'KwaZulu-Natal' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'Limpopo' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'Mpumalanga' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'Northern Cape' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'North West' AS [Value] UNION
SELECT 'Province' AS [LookupCategory],'Western Cape' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Mr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Miss' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Ms' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Dr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Admiral' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Air Comm' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Ambassador' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Baron' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Baroness' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Brig & Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Brig Gen' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Brigadier' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Brother' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Canon' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Capt' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Chief' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Cllr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Col' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Commander' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Commander & Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Consul' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Consul General' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Count' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Countess' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Countess of' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Cpl' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Dame' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Deputy' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Dr & Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Drs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Duchess' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Duke' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Earl' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Father' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'General' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Gräfin' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'HE' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'HMA' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Her Grace' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'His Excellency' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Ing' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Judge' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Justice' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Lady' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Lic' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Llc' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Lord' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Lord & Lady' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Lt' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Lt Col' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Lt Cpl' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'M' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Madam' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Madame' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Major' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Major General' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Marchioness' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Marquis' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Minister' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Mme' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Mr & Dr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Mr & Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Mr & Ms' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Prince' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Princess' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Professor' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Prof' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Prof & Dr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Prof & Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Prof & Rev' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Prof Dame' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Prof Dr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Pvt' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Rabbi' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Rear Admiral' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Rev' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Rev & Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Rev Canon' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Rev Dr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Senator' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Sgt' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Sheriff' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Sir' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Sir & Lady' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Sister' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Sqr. Leader' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Earl of' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Hon' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Hon Dr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Hon Lady' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Hon Lord' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Hon Mrs' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Hon Sir' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Honourable' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Rt Hon' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Rt Hon Dr' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Rt Hon Lord' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Rt Hon Sir' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'The Rt Hon Visc' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Viscount' AS [Value] UNION
SELECT 'Salutation' AS [LookupCategory],'Other' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Created' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Not Started' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Started' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'On Hold' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Re-Started' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Cancelled' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Blocked' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'De-scoped' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'In Progress' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Completed' AS [Value] UNION
SELECT 'Status' AS [LookupCategory],'Done' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Create' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Read' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Change' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Edit' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Update' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Delete' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Assign' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Re-Assign' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Un-Assign' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Login' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Logout' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Registration' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'De-Registration' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Activation' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'De-Activation' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Termination' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Re-Registration' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Re-Activation' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Calculate' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Re-Calculate' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Error' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Upload' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Download' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Message' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Email' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Send' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Receive' AS [Value] UNION
SELECT 'TransactionType' AS [LookupCategory],'Resend' AS [Value] UNION
SELECT 'UserLockReason' AS [LookupCategory],'User Account Expired' AS [Value] UNION
SELECT 'UserLockReason' AS [LookupCategory],'Number of Retries Reached' AS [Value] UNION
SELECT 'UserLockReason' AS [LookupCategory],'User Account Terminated' AS [Value] UNION
SELECT 'UserLockReason' AS [LookupCategory],'User Account Does Not Exist' AS [Value] UNION
SELECT 'UserLockReason' AS [LookupCategory],'Invalid Credentials' AS [Value] UNION
SELECT 'UserLockReason' AS [LookupCategory],'User Account Compromised' AS [Value] UNION
SELECT 'UserLockReason' AS [LookupCategory],'User Account Not Activated' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Monthly' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Hourly' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Commission' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Overtime' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Retroactive' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Bonus' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Severance' AS [Value] UNION
SELECT 'WageType' AS [LookupCategory],'Accrued Time Off' AS [Value]
)
SELECT DISTINCT
	[lc].[_id] AS [LookupCategoryId],
	CASE
		WHEN LEN(ISNULL([cte].[Value], '')) = 0 THEN 'Other'
		ELSE LTRIM(RTRIM([cte].[Value]))
	END AS [Value],
	(SELECT [_id] FROM [IdaDB_v2].[dbo].[User] WHERE [EmailAddress] = 'root@genio.idas.co.za') AS [CreatedBy]
FROM [cte]
JOIN [IdaDB_v2].[dbo].[LookupCategory] AS [lc] ON LTRIM(RTRIM([cte].[LookupCategory])) = LTRIM(RTRIM([lc].[Name]))