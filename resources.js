const resources = [
  // Clothing
  {
    category: "Clothing",
    name: "Beaverton Seventh-Day Adventist",
    address: "14645 SW Davis Rd. Beaverton, OR 97007",
    phone: "503-646-9828",
    hours: "Tues. 9 a.m.-noon",
    services: "Walk-in clothes closet",
    notes: "Bus: 62, 88",
    transportation: "Bus: 62, 88"
  },
  {
    category: "Clothing",
    name: "Clothes for Kids",
    address: "16550 SW Merlo Rd. Beaverton, OR 97006",
    phone: "503-356-4322",
    hours: "Appointment required",
    services: "Free clothing",
    notes: "For low-income students attending Beaverton schools. Not for adults, infants, or toddlers. Must make an appointment over the phone or through a ParentSquare account.",
    transportation: "Bus: 67, MAX: Blue"
  },
  {
    category: "Clothing",
    name: "Elevate Him",
    address: "1513 SW Marlow St. Ste. A Portland, OR 97225",
    phone: "503-810-1607",
    hours: "Call to make an appointment",
    services: "Men's resource center offering clothes, supportive men's groups, and haircuts and styling",
    notes: "",
    transportation: ""
  },
  {
    category: "Clothing",
    name: "Helping Hands Clothes Closet",
    address: "14986 NW Cornell Rd. Portland, OR 97229",
    phone: "503-292-9293",
    hours: "Wed. 9:30-11:30 a.m. and 4-6 p.m.",
    services: "Adult and children's clothing and shoes",
    notes: "At Sunset Presbyterian Church. No appointment needed.",
    transportation: "Bus: 48"
  },

  // Day Services/Hygiene
  {
    category: "Day Services/Hygiene",
    name: "Just Compassion of East Washington County",
    address: "12264 SW Hall Blvd. Tigard, OR 97223",
    phone: "503-624-4666",
    hours: "7 a.m.-7 p.m. daily",
    services: "Welcoming, low-barrier space for people experiencing homelessness. Meals, showers, connection with providers, help finding stable housing.",
    notes: "For people experiencing homelessness.",
    transportation: "Bus: 12, 78"
  },
  {
    category: "Day Services/Hygiene",
    name: "Open Door HousingWorks",
    address: "34420 SW Tualatin Valley Hwy. Hillsboro, OR 97123",
    phone: "503-640-6689",
    hours: "Mon.-Fri. 9 a.m.-3 p.m.",
    services: "Day shelter offering meals, food boxes, showers, laundry, mail and phone access",
    notes: "",
    transportation: "Bus: 57"
  },
  {
    category: "Day Services/Hygiene",
    name: "Project Homeless Connect",
    address: "SE 6th Ave. Hillsboro, OR 97123 (Located on SE 6th between SE Oak St. and SE Baseline - across from Tuality Hospital.)",
    phone: "971-713-3930",
    hours: "Daily 7 a.m.-4 p.m.",
    services: "Breakfast and lunch, comfortable day center space, cell phone charging stations, computer access, laundry, showers, food, assistance with obtaining state ID, housing resources, and other services.",
    notes: "",
    transportation: "Bus: 57, MAX: Blue"
  },

  // Disability and Aging Support
  {
    category: "Disability and Aging Support",
    name: "Disability, Aging and Veteran Services",
    address: "5240 NE Elam Young Pkwy., Ste. 300, Hillsboro, OR. 97124",
    phone: "503-846-3060",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Programs and services to enhance quality of life and ensure basic needs are met. Includes Oregon Project Independence, food and nutrition services.",
    notes: "For Washington County seniors, veterans, and people with disabilities. Most programs serve those 60 years and older, but veterans and benefits enrollment center serves all ages.",
    transportation: ""
  },
  {
    category: "Disability and Aging Support",
    name: "Social Security Administration",
    address: "11975 SW Second St. Ste. 100 Beaverton, OR 97005",
    phone: "1-800-772-1213",
    hours: "Mon.-Fri. 9 a.m.-4 p.m.",
    services: "General information about Social Security Disability Insurance and Supplemental Security Income",
    notes: "",
    transportation: "Bus: 53, 57, 78, 88"
  },

  // Domestic Violence/Sexual Assault
  {
    category: "Domestic Violence/Sexual Assault",
    name: "Domestic Violence Resource Center, Inc.",
    address: "Confidential",
    phone: "503-469-8620 (24/7 crisis line)",
    hours: "Advocacy & Protective Orders: Mon.-Thurs. 8:30a.m.-4 p.m., Fri. 8:30a.m.-2 p.m.; Counseling Services: Mon.-Thurs. 10 a.m.-7 p.m.",
    services: "Advocacy services for survivors of domestic violence, advocate support for filing protective orders, safety planning, resource referrals, individual and group counseling for adults, individual counseling for children and teens (ages 5-18).",
    notes: "All services are confidential and free of charge. Servicios disponibles en español.",
    transportation: ""
  },
  {
    category: "Domestic Violence/Sexual Assault",
    name: "Family Justice Center",
    address: "735 SW 158th Ave. Ste. 100 Beaverton, OR 97006",
    phone: "503-430-8300",
    hours: "Mon.-Fri. 8:30a.m.- 4 p.m.",
    services: "Wrap-around services for survivors of Domestic Violence, Sexual Assault, Sexual Exploitation, Elder Abuse, Family Violence, and their children. Childcare, food, hygiene, and legal support, referrals for housing, benefits, and mental health support.",
    notes: "",
    transportation: ""
  },
  {
    category: "Domestic Violence/Sexual Assault",
    name: "Kim's Place",
    address: "Confidential location",
    phone: "971-415-0007",
    hours: "Call or fill out online application",
    services: "Place of refuge, sober living home.",
    notes: "Caters specifically to women who have left the sex industry, including trafficked women. Goal is to give women dignity, power over their lives, and help them transition into their own home, job, and safety.",
    transportation: ""
  },
  {
    category: "Domestic Violence/Sexual Assault",
    name: "Monika's House",
    address: "Confidential location (Hillsboro)",
    phone: "1-866-469-8600 (24/7 crisis line)",
    hours: "Call the crisis line to get connected",
    services: "Safe, confidential emergency shelter and domestic violence crisis hotline. Services for shelter residents include advocacy, case management, and support groups.",
    notes: "",
    transportation: ""
  },
  {
    category: "Domestic Violence/Sexual Assault",
    name: "Oregon Crime Victims Law Center",
    address: "Confidential",
    phone: "503-208-8160",
    hours: "Office visits by appointment only",
    services: "Free legal information, referrals and representation for victims of crime regarding their rights in criminal cases; legal information and representation in protective order cases for survivors of domestic violence, sexual assault and stalking.",
    notes: "Call for intake to determine eligibility for services. Serves all Oregon counties.",
    transportation: ""
  },
  {
    category: "Domestic Violence/Sexual Assault",
    name: "Sexual Assault Resource Center (SARC)",
    address: "Confidential",
    phone: "1-888-640-5311 (24/7 crisis line)",
    hours: "Call the crisis line to get connected",
    services: "Immediate 24-hour response and support to survivors of sexual assault, case management, education and outreach programs, support groups, and free mental health services.",
    notes: "",
    transportation: ""
  },

  // Family and Parenting Support
  {
    category: "Family and Parenting Support",
    name: "Children and Youth Counseling, DVRC",
    address: "Confidential",
    phone: "503-521-7997",
    hours: "Mon.-Thurs. 10 a.m.-7 p.m.",
    services: "Individual counseling services for children and youth who have witnessed family violence; individual counseling for teens 14 to 18 who have experienced teen dating violence.",
    notes: "Bilingual (Spanish) services available. Children and youth under 14 must have a non-offending parent or guardian willing to receive some parental education. Call for current appointment availability and to schedule intake.",
    transportation: ""
  },
  {
    category: "Family and Parenting Support",
    name: "Morrison Child and Family Services",
    address: "15455 NW Greenbrier Pkwy. Ste. 200 Beaverton, OR 97006",
    phone: "503-258-4495",
    hours: "Mon.-Fri. 8 a.m-7 p.m.",
    services: "Specialized outpatient mental health services for children ages 3 through 18.",
    notes: "",
    transportation: ""
  },
  {
    category: "Family and Parenting Support",
    name: "Oregon Child Development Coalition (OCDC)",
    address: "Confidential",
    phone: "503-213-1191 or 503-359-0649",
    hours: "Call for more information",
    services: "Early Childhood education for children from 6 weeks to 5 years old. Provides school readiness, family advocacy and engagement, health screenings and referrals, healthy meals, and other services.",
    notes: "",
    transportation: ""
  },
  {
    category: "Family and Parenting Support",
    name: "Safe Families for Children",
    address: "Confidential",
    phone: "503-906-1027 (Spanish: 503-614-1299)",
    hours: "Call or fill out a referral on the website",
    services: "Support to families in crisis by assisting parents to get back on their feet without fear of losing custody of their children. Placing children and teens in loving, safe environments with volunteer host families while parents work on wellness goals. Mentoring and coaching of parents.",
    notes: "All at no cost to families. Serves the tri-county area.",
    transportation: ""
  },
  {
    category: "Family and Parenting Support",
    name: "Safe Oregon",
    address: "Confidential",
    phone: "844-472-3367 (Call or Text 24/7)",
    hours: "24/7, 365 days a year",
    services: "Way to report safety threats or potential acts of violence confidentially or anonymously. Tips are promptly analyzed and forwarded to designated personnel.",
    notes: "Not for immediate emergency response. Email: tips@safeoregon.com, website: www.safeoregon.com/report-a-tip/.",
    transportation: ""
  },
  {
    category: "Family and Parenting Support",
    name: "Tigard-Tualatin Family Resource Center",
    address: "9500 SW Murdock St. Tigard, OR 97224 (James Templeton Elementary School)",
    phone: "503-603-1585",
    hours: "Open on school days",
    services: "Basic needs resource connection, information on how to get clothing for babies and children, school supplies, and early learning supports.",
    notes: "Serves families with children ages 0-18 who live within the Tigard-Tualatin School District boundary.",
    transportation: ""
  },

  // Food and Grocery Assistance
  {
    category: "Food and Grocery Assistance",
    name: "Beaverton Resource Center",
    address: "13565 SW Walker Rd. Beaverton, OR 97005",
    phone: "503-591-9025",
    hours: "Phone Hours: Mon-Fri. 9 a.m.-2 p.m.; Office hours: Tues., Wed., and Fri. 9 a.m.-1 p.m.",
    services: "Central hub for those struggling with hunger, housing insecurity and poverty.",
    notes: "",
    transportation: ""
  },
  {
    category: "Food and Grocery Assistance",
    name: "Beaverton Seventh-Day Adventist",
    address: "14645 SW Davis Rd. Beaverton, OR 97007",
    phone: "503-646-9828 ext. 16",
    hours: "Tues. 8:30a.m.-12:30p.m.",
    services: "Helping Hands Food Pantry offers food boxes.",
    notes: "",
    transportation: "Bus: 62, 88"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Tigard-Tualatin Family Resource Center",
    address: "14460 SW 114th Ave. Tigard (house behind Christ the King Lutheran Church)",
    phone: "503-684-8225",
    hours: "Thurs. noon-3 p.m. (Not open on holidays)",
    services: "King's Kindness food pantry",
    notes: "Available to anyone in need. Located in the back parking lot of the church by the office building.",
    transportation: "Bus: 94"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Community Table Food Pantry",
    address: "1095 S Beech St. Cornelius, OR 97113 or 14986 NW Cornell Rd. Portland, OR 97229",
    phone: "503-292-9293",
    hours: "Wed. 9:30-11:30 a.m. and 4-6 p.m.",
    services: "Drive-thru style food pantry",
    notes: "Make an appointment through Care to Share (503-591-9025) for Sunset Church. Volunteers collect a list of groceries and food for household and bring it out to you.",
    transportation: "Bus: 48"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Hillsboro Seventh-Day Adventist",
    address: "367 NE Grant St. Hillsboro, OR 97124",
    phone: "503-648-3922",
    hours: "Thurs. 6:30-8 p.m.",
    services: "Food boxes",
    notes: "For Washington County residents.",
    transportation: "Bus: 46"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Holy Trinity Food Closet",
    address: "13715 SW Walker Rd. Beaverton, OR 97005",
    phone: "503-641-1842",
    hours: "Shopping-style pantry: First Wed. 1-3 p.m., Third Sat. 10 a.m.-noon. Food pantry hours (with appointment): Tues., Wed., Fri. 10 a.m.-12:30 p.m.",
    services: "Shopping-style pantry.",
    notes: "Walk-ins welcome. English/Spanish. May receive assistance twice a month. Make an appointment through Care to Share (503-591-9025) for Holy Trinity Food Closet.",
    transportation: "Bus: 57 , 59, 62, 67"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Oregon Food Bank",
    address: "Multiple locations",
    phone: "503-439-6510",
    hours: "Phone hours: Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Referral service to help individuals find perishable and non-perishable food assistance. Resources for fresh produce, protein options, canned and dry goods.",
    notes: "Varies by location. Visit Food Finder for locations, days and times. Available in 19 languages. Website: oregonfoodfinder.org.",
    transportation: ""
  },
  {
    category: "Food and Grocery Assistance",
    name: "Supplemental Nutrition Assistance Program (SNAP)",
    address: "Beaverton Self-Sufficiency: 15425 NW Greenbrier Pkwy.; Beaverton Aging and People with Disabilities: 4805 SW Griffith Dr. Ste. B; Hillsboro Self-Sufficiency: 5300 NE Elam Young Pkwy., Ste. 110; Tigard Self-Sufficiency: 10777 SW Cascade Ave.",
    phone: "503-646-9952 (Beaverton Self-Sufficiency) , 503-627-0362 (Beaverton Aging and People with Disabilities) , 503-693-4555 (Hillsboro Self-Sufficiency) , 503-670-9711 (Tigard Self-Sufficiency)",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Helps low-income people and families buy the food they need. Benefits provided on a debit card and accepted at most grocery stores.",
    notes: "For low-income people and families. Can apply for a SNAP card at listed locations or get more information at the Department of Human Services website.",
    transportation: "Bus: 48, 67 (Beaverton Self-Sufficiency); 54, 52 (Beaverton Aging and People with Disabilities); MAX Blue (Hillsboro Self-Sufficiency); 76, 78 (Tigard Self-Sufficiency)"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Sherwood Helping Hands",
    address: "22280 SW Washington St. Sherwood, OR 97140",
    phone: "503-625-7975",
    hours: "Third Saturday of the month, 9-10 a.m.",
    services: "Monthly food pantry distribution",
    notes: "Located at Sherwood United Methodist Church.",
    transportation: "Bus: 94"
  },
  {
    category: "Food and Grocery Assistance",
    name: "St. Francis Food Pantry",
    address: "15659 SW Oregon St. Sherwood, OR 97140",
    phone: "503-625-7067",
    hours: "Wed. 9-11 a.m. and 5-7 p.m.; Thurs. 9-11 a.m.",
    services: "Shopping-style food pantry",
    notes: "For low-income residents of Tualatin, Sherwood, Newberg and King City.",
    transportation: "Bus: 94"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Taste and See Local",
    address: "2134 19th Ave. Forest Grove, OR 97116",
    phone: "971-825-6576",
    hours: "Thurs. 10:45 a.m.-12:45 p.m.",
    services: "Food pantry",
    notes: "For low-income residents of Dilley, Cornelius, Forest Grove, Gales Creek, Gaston and Laurelwood.",
    transportation: "Bus: 57"
  },
  {
    category: "Food and Grocery Assistance",
    name: "The Salvation Army HOPE Center",
    address: "1440 SE 21st Ave. Hillsboro, OR 97123",
    phone: "800-858-7126",
    hours: "Mon., Tues., Thurs., Fri. 1 p.m.-3:45 p.m.",
    services: "Food boxes",
    notes: "",
    transportation: "Bus: 57, MAX: Blue"
  },
  {
    category: "Food and Grocery Assistance",
    name: "True Life Fellowship Food Pantry",
    address: "1895 NW 169th Pl. Beaverton, OR 97006",
    phone: "503-810-7426",
    hours: "2nd and 4th Sat. of the month 10 a.m.-1 p.m.",
    services: "Emergency food boxes",
    notes: "For low-income Washington County residents.",
    transportation: "Bus 89"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Tualatin Food Pantry",
    address: "3550 SW Borland Rd. Tualatin, OR 97062",
    phone: "503-783-0721",
    hours: "Mon. 11 a.m.-1 p.m. and 4-7 p.m.; Wed. 10 a.m.-1 p.m.; Thurs. 4-6 p.m.; Fri. 10 a.m.-1 p.m.",
    services: "Shopping-style pantry",
    notes: "For low-income residents of Durham, Lake Oswego, Tualatin, West Linn and Wilsonville located at Rolling Hills Community Church. Clients are welcome to visit twice per calendar month.",
    transportation: "Bus: 76, 96, Tualatin Ride Connection"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Unity Church of Beaverton Food Pantry",
    address: "12650 SW Fifth St. Beaverton (enter through the parking lot door)",
    phone: "503-646-3364",
    hours: "Tues. and Wed. 11 a.m.-3 p.m.",
    services: "Food boxes",
    notes: "For low-income residents within specific zip codes: 97005, 97006, 97007, 97008.",
    transportation: "Bus: 52, 76, 78"
  },
  {
    category: "Food and Grocery Assistance",
    name: "Vernonia Cares Food Bank",
    address: "547 Weed Ave. Vernonia, OR 97064",
    phone: "503-429-1414",
    hours: "Tues. and Thurs. 10 a.m.-2 p.m.",
    services: "Emergency food boxes provide 3-day supply of groceries",
    notes: "For low-income residents of Vernonia, Timber, Manning and Buxton. Website: www.vernoniacares.org.",
    transportation: ""
  },
  {
    category: "Food and Grocery Assistance",
    name: "Gaston Food Pantry-Wapato Valley Church",
    address: "200 Front St. Gaston, OR 97119",
    phone: "503-985-3351",
    hours: "Thurs. 5-7 p.m.",
    services: "Food bank and clothing",
    notes: "Food bank for low-income residents of zip codes 97119 and 97148. Clothing for anyone in need.",
    transportation: ""
  },
  {
    category: "Food and Grocery Assistance",
    name: "Women, Infants and Children (WIC)",
    address: "Beaverton: 12550 SW Second St.; Hillsboro: 254 N First Ave.; Tigard: 11515 SW Durham Rd. Ste. E8.",
    phone: "503-846-3555",
    hours: "Beaverton: Mon.: 10 a.m.-4:30p.m. Tues., Wed., Thurs., Fri.: 8 a.m.-4:30 p.m.; Hillsboro: Mon. 10 a.m.-4:30 p.m. Tues., Wed., Thurs., Fri.: 8 a.m.-4:30 p.m.; Tigard: Mon. 10 a.m.-12:30 p.m. and 2-6:30p.m. Tues., Wed., Thurs., Fri. 8-11:30 a.m. and 1-4:30 p.m.",
    services: "Provides monthly healthy food benefits, growth monitoring, and referral to other programs.",
    notes: "For pregnant and post-partum women, infants, and children up to age 5. To make an appointment, call or submit an online interest form: https://forms.co.washington.or.us/form/wic-web-referral.",
    transportation: ""
  },

  // Health Care
  {
    category: "Health Care",
    name: "Borland Free Clinic",
    address: "3550 SW Borland Rd. Tualatin, OR 97062",
    phone: "503-974-8887",
    hours: "Mon. and Thurs. 3-7 p.m.; Wed. 9 a.m.-1 p.m.",
    services: "Primary care, chronic disease management, assistance obtaining free or discounted medications, gynecological appointments, mental health support, diabetes education, physical therapy, and radiology.",
    notes: "For patients who are uninsured, underinsured, or insured but cannot afford co-pays. Call for appointment. Website: www.borlandclinic.org.",
    transportation: ""
  },
  {
    category: "Health Care",
    name: "Planned Parenthood - Columbia Willamette",
    address: "12220 SW First St. Ste. 200 Beaverton, OR 97005",
    phone: "888-576-7526",
    hours: "Tues., Thurs. and Fri. 8 a.m.-3:30p.m.; Mon. and Wed. 10 a.m.-5:30 p.m.",
    services: "Low-cost birth control, annual visits and Pap exams, free pregnancy testing and options information, medication abortion, prenatal care, emergency contraception, STI and HIV testing and treatment, PrEP, cancer screenings, vasectomy, menopausal care, and erectile dysfunction treatment.",
    notes: "Insured or uninsured patients accepted, financial assistance and/or support enrolling for healthcare available. Website: www.ppcw.org.",
    transportation: "Bus: 76, 78, MAX"
  },
  {
    category: "Health Care",
    name: "Oregon Health Plan/Medicaid",
    address: "Confidential",
    phone: "800-273-0557",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Assists members having problems getting medical, dental or mental health care. Provides information and referral for OHP.",
    notes: "Call for assistance. Website: www.oregon.gov/oha.",
    transportation: ""
  },
  {
    category: "Health Care",
    name: "Virginia Garcia Memorial Health Centers",
    address: "Multiple locations",
    phone: "Various",
    hours: "Various",
    services: "Healthcare services, including medical, dental, behavioral health, and vision.",
    notes: "Accepts insured, Spanish, English interpreters available. More info: www.virginiagarcia.org.",
    transportation: "Varies by location."
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Beaverton Dental @ The Round",
    address: "12600 SW Crescent St. Beaverton",
    phone: "503-718-3875",
    hours: "Mon.-Fri. 7 a.m.-6 p.m.",
    services: "Dental Services",
    notes: "",
    transportation: "Bus: 20, 57, MAX Blue"
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Beaverton Wellness Center",
    address: "2725 SW Central Hills Blvd. Ste. 200 Hillsboro",
    phone: "503-352-8000",
    hours: "Mon.-Fri. 8 a.m.-7 p.m.",
    services: "Wellness Center",
    notes: "",
    transportation: "Bus: 20, 57, MAX Blue"
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Beaverton Wellness Center Pharmacy",
    address: "2728 SW Cedar Hills Blvd. Ste. 200, Hillsboro",
    phone: "503-352-8000",
    hours: "Mon., Tues., Thurs., Fri. 9 a.m.-6 p.m.; Wed. 10 a.m.-6 p.m.",
    services: "Pharmacy",
    notes: "",
    transportation: "MAX Blue"
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Beaverton Vision",
    address: "12400 SW Crescent St. Ste. 130 Hillsboro",
    phone: "503-352-1899",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Vision",
    notes: "",
    transportation: ""
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Cornelius Wellness Center Dental",
    address: "1215 N Adair St. Hillsboro",
    phone: "503-359-8305",
    hours: "Mon.-Fri. 7 a.m.-5 p.m.",
    services: "Dental",
    notes: "Appointments must be made by phone. No walk-ins.",
    transportation: ""
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Hillsboro Dental",
    address: "150 SE Oak St. Ste. A and B, Hillsboro",
    phone: "503-352-2554",
    hours: "Mon.-Fri. 7 a.m.-8 p.m.",
    services: "Dental",
    notes: "Appointments must be made by phone. No walk-ins.",
    transportation: "Bus: 48, 47, 57, MAX Blue"
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Hillsboro Vision Clinic",
    address: "228 SE Eighth Ave. Hillsboro",
    phone: "503-601-7400",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.; Closed the 1st, 3rd, and 5th Wed. of the month from 1-2 p.m.",
    services: "Vision",
    notes: "Direct daily noon-1 p.m. Public University College of Optometry.",
    transportation: "MAX Blue"
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Cornelius Wellness Center Pharmacy",
    address: "1151 N Main St. Hillsboro",
    phone: "503-352-8632",
    hours: "Mon. and Wed. 10 a.m.-5:30 p.m.; Tues., Fri. 8:30 a.m.-3:30 p.m.; Thurs. 10:30 a.m.-7:15 p.m.",
    services: "Pharmacy",
    notes: "",
    transportation: "Bus: 57"
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Hillsboro Clinic",
    address: "228 SE Eighth Ave. Hillsboro",
    phone: "503-601-7400",
    hours: "Mon.-Fri. 8 a.m.-7 p.m.",
    services: "Clinic",
    notes: "Closed the 1st, 3rd, and 5th Wed. of the month from 1-2 p.m.",
    transportation: "MAX Blue"
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Hillsboro Women's Clinic",
    address: "333 SE Seventh Ave. Ste. 50 Hillsboro",
    phone: "503-359-5561",
    hours: "Mon., Wed., and Fri. 8 a.m.-5 p.m.; Tues. and Thurs. 10 a.m.-7 p.m.",
    services: "Women's Clinic",
    notes: "",
    transportation: ""
  },
  {
    category: "Health Care",
    name: "Virginia Garcia - Cornelius Wellness Center Vision",
    address: "1151 N Adair St. Hillsboro",
    phone: "503-352-8543",
    hours: "Mon., Wed., Fri. 8 a.m.-5 p.m.; Tues. and Thurs. 10 a.m.-7 p.m.",
    services: "Vision",
    notes: "",
    transportation: "Bus: 57"
  },

  // Housing and Rental Assistance
  {
    category: "Housing and Rental Assistance",
    name: "Open Door HousingWorks",
    address: "34420 SW Tualatin Valley Hwy. Hillsboro, OR 97123",
    phone: "503-640-6689",
    hours: "Mon.-Fri. 9 a.m.-3 p.m.",
    services: "Offer support in obtaining and retaining affordable permanent housing. Come to the drop in center for specific information about shelter referrals and housing services.",
    notes: "",
    transportation: "Bus: 57"
  },
  {
    category: "Housing and Rental Assistance",
    name: "Transponding Hope Tri-County Supportive Housing",
    address: "Multiple locations",
    phone: "503-475-0636",
    hours: "",
    services: "Provides affordable community housing program for men, women and families with on-site staff support.",
    notes: "",
    transportation: ""
  },
  {
    category: "Housing and Rental Assistance",
    name: "Washington County Housing Services",
    address: "182 NW Adams Ave. Ste. 2000 Hillsboro, OR 97124",
    phone: "503-846-4794",
    hours: "Mon.-Fri. 8:30 a.m.-5 p.m.",
    services: "Rental assistance and affordable rental opportunities for low-income families in Washington County, including Section 8 and public housing programs.",
    notes: "Most programs have waiting lists. Applicants must notify the department of changes in mailing address to keep their application current. English/Spanish.",
    transportation: "Bus: 47, 48, MAX Blue to Hatfield Gov. Ctr. Station"
  },
  {
    category: "Housing and Rental Assistance",
    name: "Community Action",
    address: "Confidential",
    phone: "503-615-0770",
    hours: "",
    services: "Emergency rent assistance",
    notes: "Call on the 15th of the month if the 15th is on a weekend, call on the following Monday. Calls will be answered on a first come first serve basis. When requesting screening for rent assistance, have full names, dates of birth, social security numbers for everyone in the household, an estimated monthly income, and a copy of the current nonpayment of rent notice from landlord. More info at www.caowash.org.",
    transportation: ""
  },

  // Legal Services
  {
    category: "Legal Services",
    name: "Lawyer Referral Service",
    address: "Confidential",
    phone: "503-684-3763 or 800-452-7636",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Referrals to attorneys in area of needed assistance.",
    notes: "30-minute consultation is $35 and other lower cost options available.",
    transportation: ""
  },
  {
    category: "Legal Services",
    name: "Oregon Law Center",
    address: "242 NE Second Ave. Ste. F Hillsboro, OR 97124",
    phone: "503-840-4115 (Public Benefits hotline: 1-800-520-5292)",
    hours: "",
    services: "Legal services for low-income clients and Seniors in Washington, Columbia, Clackamas, Tillamook and Yamhill Counties.",
    notes: "Provides free legal assistance in criminal or personal injury cases for low-income farmworkers, wage claims, discrimination, sexual harassment, claims under laws that apply to farm labor conditions and agricultural employers, housing and educational health and safety. English/Spanish.",
    transportation: ""
  },
  {
    category: "Legal Services",
    name: "St. Andrew Legal Clinic-Washington County",
    address: "232 NE Lincoln St. Ste. H Hillsboro, OR 97123",
    phone: "503-648-1500",
    hours: "Call for an appointment",
    services: "Community based nonprofit organization offering legal services in the area of family law to low-income individuals and families in Washington, Yamhill and Columbia counties.",
    notes: "Charges based on sliding scale. $50 for consultations via phone only.",
    transportation: "Bus: 48, MAX"
  },

  // Libraries
  {
    category: "Libraries",
    name: "Washington County Libraries",
    address: "Multiple locations",
    phone: "Various",
    hours: "Varies by location",
    services: "Offer safe and welcoming places where you can cool off when it's hot, or stay warm and dry when it's wet outside. Libraries are open to the public; you do not need a library card to visit. Free wifi, public computers, and printers. Borrow books or access online learning resources. Ask staff about getting a free library card. Visit wccls.org/libraries for additional locations and information.",
    notes: "Varies by location.",
    transportation: "Varies by location."
  },
  {
    category: "Libraries",
    name: "Beaverton City Library Main",
    address: "12375 SW Fifth St. Beaverton, OR 97005",
    phone: "",
    hours: "",
    services: "Library",
    notes: "",
    transportation: ""
  },
  {
    category: "Libraries",
    name: "Hillsboro Public Library Shute Park",
    address: "775 SE 10th Ave. Hillsboro, OR 97123",
    phone: "",
    hours: "",
    services: "Library",
    notes: "",
    transportation: ""
  },
  {
    category: "Libraries",
    name: "Tigard Public Library",
    address: "13500 SW Hall Blvd. Tigard, OR 97223",
    phone: "",
    hours: "",
    services: "Library",
    notes: "",
    transportation: ""
  },

  // Meals
  {
    category: "Meals",
    name: "Community Cafe at St. Anthony Parish Center",
    address: "9905 SW McKenzie St. Tigard, OR 97223",
    phone: "503-639-4179",
    hours: "Open 5 p.m. Free hot dinners every Sunday. Meals served 5:30-6:30 p.m.",
    services: "Free hot dinners",
    notes: "Donations welcome.",
    transportation: "Bus: 45, 94"
  },
  {
    category: "Meals",
    name: "Meals on Wheels People",
    address: "Confidential",
    phone: "503-736-3245",
    hours: "Call Mon.-Fri. 10 a.m.-2 p.m.",
    services: "Senior nutrition program offering home delivery and in-person meal options free to folks over 60.",
    notes: "Contributions welcome. Check eligibility: Serves Clark, Wash, and Mult. counties. www.mowp.org.",
    transportation: ""
  },
  {
    category: "Meals",
    name: "Meals on Wheels - Beaverton Center",
    address: "5550 SW Hall Blvd.",
    phone: "",
    hours: "Mon.-Wed. 11:30 a.m.-1 p.m.",
    services: "Meals served",
    notes: "",
    transportation: "Bus: 76, 78"
  },
  {
    category: "Meals",
    name: "Meals on Wheels - Tigard Center",
    address: "8835 SW O'Mara St.",
    phone: "",
    hours: "Mon.-Wed. noon-1 p.m.",
    services: "Meals served",
    notes: "",
    transportation: ""
  },
  {
    category: "Meals",
    name: "Meals on Wheels - Tualatin Center",
    address: "8515 SW Tualatin Rd.",
    phone: "",
    hours: "Tues. and Thurs. noon-1 p.m.",
    services: "Meals served",
    notes: "",
    transportation: ""
  },
  {
    category: "Meals",
    name: "Meals on Wheels - Forest Grove Center",
    address: "2037 Douglas St.",
    phone: "",
    hours: "Tues. and Thurs. noon-1 p.m.",
    services: "Meals served",
    notes: "",
    transportation: ""
  },
  {
    category: "Meals",
    name: "Faith Café",
    address: "5250 SW Watson Ave. Beaverton, OR 97005",
    phone: "",
    hours: "Every Sunday and the last Thurs. of the month at 4:15 p.m.",
    services: "Dine-in or take-out hot meals.",
    notes: "A variety of donated fruits, vegetables and baked goods are available each Sunday. Guests can select items based on their own preferences.",
    transportation: "Bus: 76, 78"
  },
  {
    category: "Meals",
    name: "Forest Grove Senior & Community Center",
    address: "2037 Douglas St., Forest Grove, OR 97116",
    phone: "503-357-2021",
    hours: "Tues., Thurs. 11:30 a.m.-1:30 p.m.",
    services: "Lunches available through Meals on Wheels. Activities for seniors. Medical equipment lending program.",
    notes: "Ride Connections available to those eligible.",
    transportation: "Bus: 57"
  },
  {
    category: "Meals",
    name: "The Salvation Army HOPE Center",
    address: "1440 SE 21st Ave. Hillsboro, OR 97123",
    phone: "800-858-7126",
    hours: "Mon., Tues., Thurs. and Fri. 9:30 a.m.-3:30 p.m.",
    services: "Sack lunches",
    notes: "",
    transportation: "Bus: 57, 48, MAX Blue"
  },

  // Mental Health and Recovery Services
  {
    category: "Mental Health and Recovery Services",
    name: "CODA Hillsboro Recovery Center",
    address: "720 SE Washington St. Hillsboro, OR 97213",
    phone: "855-733-2632",
    hours: "Mon.-Fri. 9 a.m.-5 p.m.",
    services: "Outpatient medication assisted treatment clinic for substance use disorders.",
    notes: "OHP accepted. Walk-in Mon.-Fri. 9 a.m.-5 p.m..",
    transportation: "Bus: 47, 57, MAX Blue"
  },
  {
    category: "Mental Health and Recovery Services",
    name: "CODA Tigard Recovery Center",
    address: "10392 SW McDonald St. Tigard, OR 97224",
    phone: "855-733-2632",
    hours: "Mon., Tues., Fri. 9 a.m.-5 p.m.",
    services: "Outpatient medication assisted treatment clinic for substance use disorders.",
    notes: "Male only, no walk-ins. OHP accepted. Dual-bended program, withdrawal management and medication assisted treatment (MAT).",
    transportation: "Bus: 12, 93, 94"
  },
  {
    category: "Mental Health and Recovery Services",
    name: "Fora FHP Outpatient Services",
    address: "205 SE Third Ave. Ste. 100 Hillsboro, OR 97213",
    phone: "503-336-1110",
    hours: "Tues., 2-4 p.m.; Thurs. 10:30 a.m.-12:30 p.m.",
    services: "Substance use treatment for adults (including state-certified). DWI programs, withdrawal management (detox), and medication assisted treatment (MAT).",
    notes: "Accept most insurance, including OHP. Walk-in hours for MAT. Call for more information.",
    transportation: "Bus: 47, 48, 57, MAX Blue"
  },
  {
    category: "Mental Health and Recovery Services",
    name: "Good Samaritan Ministries",
    address: "1920 SW Cirrus Dr. Bldg. 23 Beaverton, OR 97008",
    phone: "503-644-2339",
    hours: "Mon.-Thurs. 9 a.m.-8 p.m.",
    services: "Faith-based organization offering counseling for adults, families and couples. Classes include drug and alcohol recovery.",
    notes: "All services offered on donation basis.",
    transportation: ""
  },
  {
    category: "Mental Health and Recovery Services",
    name: "NAMI Washington County",
    address: "18680 SW Shaw St. Aloha, OR 97007",
    phone: "503-356-0835",
    hours: "Mon.-Thurs. 10 a.m.-6 p.m.; Fri. 10 a.m.-4 p.m.",
    services: "Support and education through classes, support groups, referral and advocacy help for adults with mental illness and/or families of adults with mental illness.",
    notes: "Website: www.namiwashingtonco.org.",
    transportation: "Bus: 52, 57"
  },
  {
    category: "Mental Health and Recovery Services",
    name: "New Narrative Spring Creek Center",
    address: "8338 SW Center St. Tigard, OR 97223",
    phone: "503-726-3690",
    hours: "Mon.-Fri. 8 a.m.-4:30 p.m.",
    services: "Outpatient mental health treatment including counseling, case management and medication management.",
    notes: "Not a walk-in clinic.",
    transportation: ""
  },
  {
    category: "Mental Health and Recovery Services",
    name: "Providence Addiction Treatment Services",
    address: "9155 SW Barnes Rd. Ste. 205 Portland, OR 97225",
    phone: "503-216-6134",
    hours: "Mon.-Fri. 9 a.m.-2 p.m.",
    services: "Intensive inpatient and outpatient treatment services for adults with substance use disorders, including counseling skills training, and DWI and DVI diversion services.",
    notes: "Call for an appointment.",
    transportation: "Bus: 20"
  },
  {
    category: "Mental Health and Recovery Services",
    name: "Sequoia Mental Health Services",
    address: "Multiple locations",
    phone: "503-519-3591",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Intakes and referrals. Serves adults and children with mental illness and substance use disorder in Washington Co..",
    notes: "Website: www.sequoiantts.org.",
    transportation: ""
  },
  {
    category: "Mental Health and Recovery Services",
    name: "Washington County Behavioral Health",
    address: "Confidential",
    phone: "503-291-9111 (24/7 crisis line)",
    hours: "24 hours a day, seven days a week",
    services: "Crisis line for anyone struggling with drug or alcohol use, or thinking or talking about suicide.",
    notes: "For anyone you care about, feeling depressed or anxious.",
    transportation: ""
  },
  {
    category: "Mental Health and Recovery Services",
    name: "Washington County Behavioral Health - Hawthorn Walk-in Center",
    address: "5240 NE Elam Young Parkway Ste. 100 Hillsboro, OR 97124",
    phone: "",
    hours: "Mon.-Fri. 9 a.m.-2 p.m.; Sun. noon-4 p.m.",
    services: "Urgent care services for mental health and addiction. Includes assessment, counseling, education, peer support, and connection to treatment providers and other social services.",
    notes: "Walk-ins welcome.",
    transportation: "MAX Blue"
  },
  {
    category: "Mental Health and Recovery Services",
    name: "Washington County Transition Age Youth Intensive Services",
    address: "155 N First Ave. Ste. 250 Hillsboro, OR 97214",
    phone: "503-645-9010",
    hours: "",
    services: "Provides care coordination and wrap-around mental health services for eligible older adolescents and young adults under the age of 26. Supports youth moving from the children's mental health system to the adult system of care. Staff focus on issues such as getting a job and finding housing.",
    notes: "Call for intake.",
    transportation: ""
  },

  // Shelter
  {
    category: "Shelter",
    name: "Community Action - Family Shelter",
    address: "210 SE 12th Ave. Hillsboro, OR 97123",
    phone: "503-726-8932",
    hours: "",
    services: "Shelter for families with children or mothers in the last trimester of pregnancy.",
    notes: "Call to join the waitlist through Community Connect at 503-640-3263.",
    transportation: "Bus: 47, 57, MAX Blue"
  },
  {
    category: "Shelter",
    name: "Family Promise of Greater Washington County",
    address: "Confidential",
    phone: "971-217-8849",
    hours: "",
    services: "Provides a small shelter program and case management for families with children ages 0-18 and pregnant women.",
    notes: "Family advocate assigned to each family, works with them to make a tailored plan for permanent housing. Must be clean and sober. Call for intake.",
    transportation: ""
  },
  {
    category: "Shelter",
    name: "Good Neighbor Center",
    address: "11130 SW Greenburg Rd. Tigard, OR 97223",
    phone: "503-640-3263",
    hours: "Mon.-Sun. 8 a.m.-8 p.m.",
    services: "Provides safe emergency housing with supportive empowering services to adults with children younger than 18.",
    notes: "Families have up to 90 days to meet their goals with the help of staff. No allergies. To join the waitlist call Community Connect at 503-640-3263.",
    transportation: "Bus: 76, 78"
  },
  {
    category: "Shelter",
    name: "Monika's House",
    address: "Confidential location (Hillsboro)",
    phone: "1-866-469-8600 (24/7 crisis line)",
    hours: "Call the crisis line to get connected",
    services: "Safe, confidential emergency shelter and domestic violence crisis hotline. Services for shelter residents include advocacy, case management, and support groups.",
    notes: "",
    transportation: ""
  },
  {
    category: "Shelter",
    name: "Open Door HousingWorks",
    address: "34420 SW Tualatin Valley Hwy. Hillsboro, OR 97123",
    phone: "503-640-6689",
    hours: "Mon.-Fri. 9 a.m.-3 p.m.",
    services: "Day shelter, showers, and laundry.",
    notes: "Call to come to the drop-in center for specific information about shelter referrals, housing services.",
    transportation: "Bus: 57"
  },

  // Syringe Exchange/Harm Reduction
  {
    category: "Syringe Exchange/Harm Reduction",
    name: "HIV Alliance",
    address: "Multiple locations",
    phone: "971-289-7213",
    hours: "",
    services: "Needle exchange program where trans and gender diverse folks who inject hormones can dispose of their used HRT supplies and receive new needles, syringes, sharps containers and other injection supplies for free. Free HIV testing also available.",
    notes: "",
    transportation: ""
  },
  {
    category: "Syringe Exchange/Harm Reduction",
    name: "HIV Alliance - Monday Beaverton Clinic",
    address: "12550 SW Second St. Beaverton (Enter on SW Washington Ave.)",
    phone: "",
    hours: "1:30-3:30 p.m.",
    services: "Needle exchange",
    notes: "",
    transportation: "Bus: 47, 57, MAX Blue"
  },
  {
    category: "Syringe Exchange/Harm Reduction",
    name: "HIV Alliance - Wednesday Project Homeless Connect",
    address: "363 SE Sixth Ave. Hillsboro",
    phone: "",
    hours: "11 a.m.-1 p.m.",
    services: "Needle exchange",
    notes: "",
    transportation: ""
  },
  {
    category: "Syringe Exchange/Harm Reduction",
    name: "HIV Alliance - Wednesday Hillsboro Bridge Shelter",
    address: "622 SE 10th Ave. Hillsboro",
    phone: "",
    hours: "2:30-4:30 p.m.",
    services: "Needle exchange",
    notes: "",
    transportation: ""
  },

  // Veteran Services
  {
    category: "Veteran Services",
    name: "Disability, Aging and Veteran Services",
    address: "5240 NE Elam Young Pkwy., Ste. 300 Hillsboro, OR 97124",
    phone: "503-846-3060",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Programs and services to enhance quality of life and ensure basic needs are met. Includes Oregon Project Independence, food and nutrition services.",
    notes: "For Washington County seniors, veterans, and people with disabilities. Most programs serve those 60 and older, but veterans and benefits enrollment center serves all ages.",
    transportation: ""
  },
  {
    category: "Veteran Services",
    name: "The Salvation Army Veteran and Family Center",
    address: "14628 SW Farmington Rd. Beaverton, OR 97007",
    phone: "503-239-1239",
    hours: "Mon.-Fri. 8 a.m.-5 p.m.",
    services: "Per client short-term transitional housing and case management for veterans.",
    notes: "Up to nine-month program for vets and their families. Emergency transitional housing for singles only, up to 30 days with possible extension to 90 days maximum. VA must refer. Website: www.veterans.salvationarmy.org.",
    transportation: "MAX Red, Bus to Bus 52"
  },

  // Youth Services
  {
    category: "Youth Services",
    name: "Home Plate Youth Services",
    address: "Beaverton Center: 12635 SW Fourth St.; Hillsboro Center: 494 E Main St. Hillsboro",
    phone: "503-597-8591",
    hours: "Beaverton Drop-in hours: Mon. 3-5 p.m. and 6-8 p.m.; Tues. 2-3 p.m.; Wed. 3-5 p.m. and 6-8 p.m.; Hillsboro Drop-in Hours: Thurs. 6-8 p.m.",
    services: "Resource centers helping young people ages 12-24 find housing, education, employment, health referrals, clothes, and food. Free meals and shower facilities.",
    notes: "A place to relax without religious doctrines.",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Northwest Regional Education Service District",
    address: "5825 NE Ray Circle Hillsboro, OR 97124",
    phone: "503-614-1446",
    hours: "Mon.-Fri. 8 a.m.-4 p.m.",
    services: "Provides early intervention and early childhood special education services to children from birth to age 5, who have developmental delays or disabilities, including speech and language, motor, behavioral, social skills, learning, self-help, vision and hearing.",
    notes: "",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Safe Place for Youth",
    address: "Confidential",
    phone: "503-542-2717",
    hours: "Daily 9 a.m.-noon and 2-30 p.m.",
    services: "Shelter, supportive services for homeless, runaway and at-risk youth ages 12 to 20. Offers food and basic needs assistance, case management and referrals to resources.",
    notes: "Up to 30-day shelter program. Drop-in service hours.",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "School Homeless Liaisons",
    address: "Confidential",
    phone: "Various",
    hours: "Various",
    services: "Ensures housing stabilization is eligible for homeless student services, including transportation to school, immediate enrollment, and connections to resources.",
    notes: "Under the Federal McKinney-Vento Act. Contact your school district's McKinney-Vento liaison to support.",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Second Home",
    address: "243 SW Barstow St. Ste. B Portland, OR 97239",
    phone: "503-223-1054 ext. 277",
    hours: "",
    services: "Connects volunteer host homes with unaccompanied high school students 16 and older experiencing homelessness.",
    notes: "Support for participants comes from both the Second Home staff and from the community. Call for more information or talk to school district homeless liaison for referral. Serves youth in Washington County, Clackamas County, Lincoln County and East Multnomah County school districts. www.ens-secondhome.org.",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Virginia Garcia School Based Health Centers",
    address: "Various",
    phone: "Various",
    hours: "Various",
    services: "Healthcare services, including medical, dental, behavioral health, and vision.",
    notes: "Located in the following schools. Hours vary. Call or check www.virginiagarcia.org.",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Virginia Garcia - Beaverton High School",
    address: "13000 SW 2nd St. Beaverton",
    phone: "503-356-8889",
    hours: "9 a.m.-5 p.m.",
    services: "School Based Health Center",
    notes: "",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Virginia Garcia - Century High School School",
    address: "1995 SE Century Blvd. Hillsboro",
    phone: "503-597-4580",
    hours: "",
    services: "School Based Health Center",
    notes: "",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Virginia Garcia - Forest Grove High School",
    address: "1715 Nichols Lane, Forest Grove",
    phone: "503-359-4057",
    hours: "",
    services: "School Based Health Center",
    notes: "",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Virginia Garcia - Tigard High School",
    address: "9000 SW Durham Road, Building 7110, Tigard",
    phone: "503-431-5778",
    hours: "",
    services: "School Based Health Center",
    notes: "",
    transportation: ""
  },
  {
    category: "Youth Services",
    name: "Youth Contact",
    address: "447 SE Baseline St. Hillsboro, OR 97123",
    phone: "503-640-4222",
    hours: "Mon.-Thurs. 9 a.m.-7 p.m.; Evening hours by appointment only",
    services: "Digital counseling services, focusing on mental health and substance use/abuse problems.",
    notes: "Serving Hillsboro youth (up to age 18) and their families. Call to schedule appointment. HSO insurance accepted. Website: www.youthcontact.org.",
    transportation: "Bus: 47, 48, 57, MAX"
  }
];
