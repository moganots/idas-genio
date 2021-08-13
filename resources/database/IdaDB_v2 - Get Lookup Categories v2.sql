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
SELECT 'BudgetCode' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Capacity' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Human Resources' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Finance' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Sales' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Marketing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Legal' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Research and Development' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'IT Support' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'General Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Transportation' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Business Development' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Customer Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Management' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Administration' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Operations' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Communications' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Procurement' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Learning, Training and Development' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Health and Safety' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Department' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Permanent' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Part-Time' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Temporary' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Seasonal' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Indipendent Contractor' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Freelancer' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Consultant' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'EmploymentType' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Gender' AS [LookupCategory], 'Female' AS [Value], NULL AS [Image], 'female' AS [Icon] UNION
SELECT 'Gender' AS [LookupCategory], 'Male' AS [Value], NULL AS [Image], 'male' AS [Icon] UNION
SELECT 'Gender' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], 'person' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Administrators' AS [Value], NULL AS [Image], 'supervisor_account' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Clients' AS [Value], NULL AS [Image], 'stream' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Employees' AS [Value], NULL AS [Image], 'groups' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'General' AS [Value], NULL AS [Image], 'person' AS [Icon] UNION
SELECT 'Group' AS [LookupCategory], 'Suppliers' AS [Value], NULL AS [Image], 'reduce_capacity' AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Abortion Policy/Anti-Abortion' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Abortion Policy/Pro-Abortion Rights' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Accountants' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Advertising/Public Relations' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Aerospace, Defense Contractors' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agribusiness' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agricultural Services & Products' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Agriculture' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Air Transport' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Air Transport Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Airlines' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Alcoholic Beverages' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Alternative Energy Production & Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Architectural Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Attorneys/Law Firms' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Dealers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Dealers, Japanese' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Auto Manufacturers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Automotive' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banking, Mortgage' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banks, Commercial' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Banks, Savings & Loans' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Bars & Restaurants' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Beer, Wine & Liquor' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Books, Magazines & Newspapers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Broadcasters, Radio/TV' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Builders/General Contractors' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Builders/Residential' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Building Materials & Equipment' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Building Trade Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Business Associations' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Business Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cable & Satellite TV Production & Distribution' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees, Democratic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Candidate Committees, Republican' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Dealers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Dealers, Imports' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Car Manufacturers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Casinos / Gambling' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cattle Ranchers/Livestock' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Chemical & Related Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Chiropractors' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Civil Servants/Public Officials' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Clergy & Religious Organizations' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Clothing Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Coal Mining' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Colleges, Universities & Schools' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Commercial Banks' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Commercial TV & Radio Stations' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Communications/Electronics' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Computer Software' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Conservative/Republican' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Construction Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Credit Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Crop Production & Basic Processing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cruise Lines' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Cruise Ships & Lines' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Dairy' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense Aerospace' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense Electronics' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Defense/Foreign Policy Advocates' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic Candidate Committees' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic Leadership PACs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Democratic/Liberal' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Dentists' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Doctors & Other Health Professionals' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Drug Manufacturers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Education' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electric Utilities' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electronics Manufacturing & Equipment' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Electronics, Defense Contractors' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Energy & Natural Resources' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Entertainment Industry' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Environment' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Farm Bureaus' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Farming' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Finance / Credit Companies' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Finance, Insurance & Real Estate' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food & Beverage' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Processing & Sales' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Products Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Food Stores' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'For-profit Education' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'For-profit Prisons' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Foreign & Defense Policy' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Forestry & Forest Products' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Foundations, Philanthropists & Non-Profits' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Funeral Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gambling & Casinos' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gambling, Indian Casinos' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Garbage Collection/Waste Management' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gas & Oil' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'General Contractors' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Government Employee Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Government Employees' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gun Control' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Gun Rights' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health Professionals' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Health Services/HMOs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hedge Funds' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'HMOs & Health Care Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Home Builders' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hospitals & Nursing Homes' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Hotels, Motels & Tourism' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Human Rights' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Ideological/Single-Issue' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Indian Gaming' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Industrial Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Insurance' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Internet' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Israel Policy' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Labor' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lawyers & Lobbyists' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lawyers / Law Firms' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Leadership PACs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'LGBTQIA Rights & Issues' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Liberal/Democratic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Liquor, Wine & Beer' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Livestock' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lobbyists' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Lodging / Tourism' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Logging, Timber & Paper Mills' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Manufacturing, Misc' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marijuana' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marijuana' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Marine Transport' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Meat processing & products' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Medical Supplies' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Mining' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Business' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Finance' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Manufacturing & Distributing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Misc Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Miscellaneous Defense' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Miscellaneous Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Mortgage Bankers & Brokers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Motion Picture Production & Distribution' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Music Production' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Natural Gas Pipelines' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Newspaper, Magazine & Book Publishing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Non-profits, Foundations & Philanthropists' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nurses' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nursing Homes/Hospitals' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Nutritional & Dietary Supplements' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Oil & Gas' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Payday Lenders' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pharmaceutical Manufacturing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pharmaceuticals / Health Products' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Phone Companies' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Physicians & Other Health Professionals' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Postal Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Poultry & Eggs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Power Utilities' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Printing & Publishing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Private Equity & Investment Firms' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Pro-Israel' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Professional Sports, Sports Arenas & Related Equipment & Services' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Progressive/Democratic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Public Employees' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Public Sector Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Publishing & Printing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Radio/TV Stations' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Railroads' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Real Estate' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Record Companies/Singers' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Recorded Music & Music Production' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Recreation / Live Entertainment' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Religious Organizations/Clergy' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican Candidate Committees' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican Leadership PACs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Republican/Conservative' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Residential Construction' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Restaurants & Drinking Establishments' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Retail Sales' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Retired' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Savings & Loans' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Schools/Education' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sea Transport' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Securities & Investment' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Special Trade Contractors' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sports, Professional' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Steel Production' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Stock Brokers/Investment Industry' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Student Loan Companies' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Sugar Cane & Sugar Beets' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Teachers Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Teachers/Education' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Telecom Services & Equipment' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Telephone Utilities' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Textiles' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Timber, Logging & Paper Mills' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Tobacco' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Transportation' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Transportation Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Trash Collection/Waste Management' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Trucking' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'TV / Movies / Music' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'TV Production' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Airline' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Building Trades' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Industrial' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Misc' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Public Sector' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Teacher' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Unions, Transportation' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Universities, Colleges & Schools' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Vegetables & Fruits' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Venture Capital' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Waste Management' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Wine, Beer & Liquor' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'IndustryType' AS [LookupCategory], 'Womens Issues' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'CEO' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Managing Director' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'General Manager' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Secretary' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Clerk' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Engineer' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Senior Engineer' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'CFO' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Personal Assistant' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Position' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'Afrikaans' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'English' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiNdebele' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SePedi' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SeSotho' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiSwati' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'Tshonga' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'SeTswana' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'TshiVenda' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiXhosa' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'PreferredLanguage' AS [LookupCategory], 'IsiZulu' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Project Manager' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Team Lead' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Technical Lead' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Supervisor' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'General' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Engineer' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Senior Engineer' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Supplier' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Client' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Business Analyst' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Client Liason' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ProjectAssignmentType' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Eastern Cape' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Free State' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Gauteng' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'KwaZulu-Natal' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Limpopo' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Mpumalanga' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Northern Cape' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'North West' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Province' AS [LookupCategory], 'Western Cape' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Miss' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ms' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Admiral' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Air Comm' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ambassador' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Baron' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Baroness' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brig & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brig Gen' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brigadier' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Brother' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Canon' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Capt' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Chief' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Cllr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Col' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Commander' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Commander & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Consul' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Consul General' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Count' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Countess' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Countess of' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Cpl' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dame' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Deputy' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Dr & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Drs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Duchess' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Duke' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Earl' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Father' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'General' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Gräfin' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'HE' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'HMA' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Her Grace' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'His Excellency' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Ing' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Judge' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Justice' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lady' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Llc' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lord' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lord & Lady' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt Col' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Lt Cpl' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'M' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Madam' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Madame' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Major' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Major General' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Marchioness' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Marquis' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Minister' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mme' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Dr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Mr & Ms' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prince' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Princess' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Professor' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Dr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof & Rev' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof Dame' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Prof Dr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Pvt' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rabbi' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rear Admiral' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev & Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev Canon' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Rev Dr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Senator' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sgt' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sheriff' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sir' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sir & Lady' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sister' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Sqr. Leader' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Earl of' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Dr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Lady' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Lord' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Mrs' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Hon Sir' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Honourable' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Dr' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Lord' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Sir' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'The Rt Hon Visc' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Viscount' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Salutation' AS [LookupCategory], 'Other' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Created' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Not Started' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Started' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'On Hold' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Re-Started' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Cancelled' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Blocked' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'De-scoped' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'In Progress' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Completed' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Status' AS [LookupCategory], 'Done' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Create' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Read' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Change' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Edit' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Update' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Delete' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Assign' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Assign' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Un-Assign' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Login' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Logout' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Registration' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'De-Registration' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Activation' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'De-Activation' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Termination' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Registration' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Activation' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Calculate' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Re-Calculate' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Error' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Upload' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Download' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Message' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Email' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Send' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Receive' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'TransactionType' AS [LookupCategory], 'Resend' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Expired' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'Number of Retries Reached' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Terminated' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Does Not Exist' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'Invalid Credentials' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Compromised' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserLockReason' AS [LookupCategory], 'User Account Not Activated' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Root' AS [Value], NULL AS [Image], 'admin_panel_settings' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Admin' AS [Value], NULL AS [Image], 'supervisor_account' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Employee' AS [Value], NULL AS [Image], 'person' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Client' AS [Value], NULL AS [Image], 'stream' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'Supplier' AS [Value], NULL AS [Image], 'reduce_capacity' AS [Icon] UNION
SELECT 'UserType' AS [LookupCategory], 'General' AS [Value], NULL AS [Image], 'supervised_user_circle' AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Monthly' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Hourly' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Commission' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Overtime' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Retroactive' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Bonus' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Severance' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'WageType' AS [LookupCategory], 'Accrued Time Off' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ScheduleType' AS [LookupCategory],'Appointment' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'ScheduleType' AS [LookupCategory],'Meeting' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Afghanistan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Albania' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Algeria' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Andorra' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Angola' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Antigua and Barbuda' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Argentina' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Armenia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Australia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Austria' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Azerbaijan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Bahamas' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Bahrain' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Bangladesh' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Barbados' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Belarus' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Belgium' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Belize' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Benin' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Bhutan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Bolivia (Plurinational State of)' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Bosnia and Herzegovina' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Botswana' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Brazil' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Brunei Darussalam' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Bulgaria' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Burkina Faso' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Burundi' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Cabo Verde' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Cambodia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Cameroon' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Canada' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Central African Republic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Chad' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Chile' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'China' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Colombia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Comoros' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Congo' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Cook Islands' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Costa Rica' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Croatia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Cuba' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Cyprus' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Czechia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Côte d''Ivoire' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Democratic People''s Republic of Korea' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Democratic Republic of the Congo' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Denmark' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Djibouti' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Dominica' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Dominican Republic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Ecuador' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Egypt' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'El Salvador' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Equatorial Guinea' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Eritrea' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Estonia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Eswatini' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Ethiopia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Faroe Islands' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Fiji' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Finland' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'France' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Gabon' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Gambia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Georgia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Germany' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Ghana' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Greece' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Grenada' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Guatemala' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Guinea' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Guinea-Bissau' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Guyana' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Haiti' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Honduras' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Hungary' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Iceland' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'India' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Indonesia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Iran (Islamic Republic of)' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Iraq' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Ireland' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Israel' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Italy' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Jamaica' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Japan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Jordan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Kazakhstan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Kenya' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Kiribati' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Kuwait' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Kyrgyzstan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Lao People''s Democratic Republic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Latvia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Lebanon' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Lesotho' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Liberia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Libya' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Lithuania' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Luxembourg' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Madagascar' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Malawi' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Malaysia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Maldives' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Mali' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Malta' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Marshall Islands' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Mauritania' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Mauritius' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Mexico' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Micronesia (Federated States of)' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Monaco' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Mongolia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Montenegro' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Morocco' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Mozambique' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Myanmar' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Namibia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Nauru' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Nepal' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Netherlands' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'New Zealand' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Nicaragua' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Niger' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Nigeria' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Niue' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'North Macedonia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Norway' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Oman' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Pakistan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Palau' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Panama' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Papua New Guinea' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Paraguay' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Peru' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Philippines' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Poland' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Portugal' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Qatar' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Republic of Korea' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Republic of Moldova' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Romania' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Russian Federation' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Rwanda' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Saint Kitts and Nevis' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Saint Lucia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Saint Vincent and the Grenadines' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Samoa' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'San Marino' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Sao Tome and Principe' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Saudi Arabia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Senegal' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Serbia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Seychelles' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Sierra Leone' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Singapore' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Slovakia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Slovenia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Solomon Islands' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Somalia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'South Africa' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'South Sudan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Spain' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Sri Lanka' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Sudan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Suriname' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Sweden' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Switzerland' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Syrian Arab Republic' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Tajikistan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Thailand' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Timor-Leste' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Togo' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Tokelau' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Tonga' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Trinidad and Tobago' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Tunisia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Turkey' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Turkmenistan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Tuvalu' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Uganda' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Ukraine' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'United Arab Emirates' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'United Kingdom of Great Britain and Northern Ireland' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'United Republic of Tanzania' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'United States of America' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Uruguay' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Uzbekistan' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Vanuatu' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Venezuela (Bolivarian Republic of)' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Viet Nam' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Yemen' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Zambia' AS [Value], NULL AS [Image], NULL AS [Icon] UNION
SELECT 'Country' AS [LookupCategory],'Zimbabwe' AS [Value], NULL AS [Image], NULL AS [Icon]
)
SELECT
	[LookupCategory]
	, 'WHEN LEFT(TRIM([ctfc].[name]), LEN(TRIM([ctfc].[name])) - 2) = ''' + [LookupCategory] + ''' THEN ''BGC'''
	, 'case ''' + [LookupCategory] + 'Id'':'
FROM [cte]
GROUP BY
	[LookupCategory]