const states = [
  {
    value: "AN",
    label: "Andaman and Nicobar Islands",
    district: [
      {
        value: "NI",
        label: "Nicobar",
      },
      {
        value: "NA",
        label: "North and Middle Andaman",
      },
      {
        value: "SA",
        label: "South Andaman",
      },
    ],
    pincode: [
      {
        value: "NI",
        label: "345456",
      },
      {
        value: "NA",
        label: "345433",
      },
      {
        value: "SA",
        label: "345477",
      },
    ],
  },
  {
    value: "AP",
    label: "Andhra Pradesh",
    district: [
      {
        value: "AN",
        label: "Anantapur",
      },
      {
        value: "CH",
        label: "Chittoor",
      },
      {
        value: "EG",
        label: "East Godavari",
      },
    ],
    pincode: [
      {
        value: "AN",
        label: "455544",
      },
      {
        value: "CH",
        label: "477844",
      },
      {
        value: "EG",
        label: "488567",
      },
    ],
  },
  {
    value: "AR",
    label: "Arunachal Pradesh",
    district: [
      {
        value: "TA",
        label: "Tawang",
      },
      {
        value: "EK",
        label: "East Kameng",
      },
      {
        value: "PA",
        label: "Papum Pare",
      },
    ],
    pincode: [
      {
        value: "TA",
        label: "567765",
      },
      {
        value: "EK",
        label: "567745",
      },
      {
        value: "PA",
        label: "557467",
      },
    ],
  },
  {
    value: "AS",
    label: "Assam",
    district: [
      {
        value: "BK",
        label: "Baksa",
      },
      {
        value: "BP",
        label: "Barpeta",
      },
      {
        value: "BS",
        label: "Biswanath",
      },
    ],
    pincode: [
      {
        value: "BK",
        label: "746373",
      },
      {
        value: "BP",
        label: "746388",
      },
      {
        value: "BS",
        label: "746567",
      },
    ],
  },
  {
    value: "BR",
    label: "Bihar",
    district: [
      {
        value: "AW",
        label: "Arwal",
      },
      {
        value: "PT",
        label: "Patana",
      },
      {
        value: "BA",
        label: "Banka",
      },
    ],
    pincode: [
      {
        value: "AW",
        label: "856777",
      },
      {
        value: "PT",
        label: "345677",
      },
      {
        value: "BA",
        label: "456645",
      },
    ],
  },
  {
    value: "CG",
    label: "Chandigarh",
    district: [
      {
        value: "CG",
        label: "Chandigarh",
      },
    ],
    pincode: [
      {
        value: "CG",
        label: "455637",
      },
    ],
  },
  {
    value: "DH",
    label: "Dadra and Nagar Haveli",
    district: [
      {
        value: "DH",
        label: "Dadra and Nagar Haveli",
      },
    ],
    pincode: [
      {
        value: "DH",
        label: "888567",
      },
    ],
  },
  {
    value: "DD",
    label: "Daman and Diu",
    district: [
      {
        value: "DD",
        label: "Daman and Diu",
      },
    ],
    pincode: [
      {
        value: "DD",
        label: "423493",
      },
    ],
  },
  {
    value: "DL",
    label: "Delhi",
    district: [
      {
        value: "ND",
        label: "New Delhi",
      },
      {
        value: "CD",
        label: "Central Delhi",
      },
      {
        value: "ED",
        label: "East Delhi",
      },
    ],
    pincode: [
      {
        value: "ND",
        label: "234432",
      },
      {
        value: "CD",
        label: "234567",
      },
      {
        value: "ED",
        label: "234675",
      },
    ],
  },
  {
    value: "GA",
    label: "Goa",
    district: [
      {
        value: "NG",
        label: "North Goa",
      },
      {
        value: "SG",
        label: "South Goa",
      },
    ],
    pincode: [
      {
        value: "NG",
        label: "786588",
      },
      {
        value: "SG",
        label: "786678",
      },
    ],
  },
  {
    value: "GJ",
    label: "Gujarat",
    district: [
      {
        value: "AHD",
        label: "Ahmedabad",
      },
      {
        value: "AM",
        label: "Amreli",
      },
      {
        value: "AN",
        label: "Anand",
      },
    ],
    pincode: [
      {
        value: "AHD",
        label: "123456",
      },
      {
        value: "AM",
        label: "123890",
      },
      {
        value: "AN",
        label: "123894",
      },
    ],
  },
  {
    value: "HR",
    label: "Haryana",
    district: [
      {
        value: "AM",
        label: "Ambala",
      },
      {
        value: "BH",
        label: "Bhiwani",
      },
      {
        value: "CD",
        label: "Charkhi Dadri",
      },
    ],
    pincode: [
      {
        value: "AM",
        label: "427342",
      },
      {
        value: "BH",
        label: "427838",
      },
      {
        value: "CD",
        label: "427839",
      },
    ],
  },
  {
    value: "HP",
    label: "Himachal Pradesh",
    district: [
      {
        value: "CM",
        label: "Chamba",
      },
      {
        value: "HM",
        label: "Hamirpur",
      },
      {
        value: "BP",
        label: "Bilaspur",
      },
    ],
    pincode: [
      {
        value: "CM",
        label: "556743",
      },
      {
        value: "HM",
        label: "556733",
      },
      {
        value: "BP",
        label: "556903",
      },
    ],
  },
  {
    value: "JK",
    label: "Jammu and Kashmir",
    district: [
      {
        value: "KT",
        label: "Kathua",
      },
      {
        value: "JM",
        label: "Jammu",
      },
      {
        value: "SM",
        label: "Samba",
      },
    ],
    pincode: [
      {
        value: "KT",
        label: "889879",
      },
      {
        value: "JM",
        label: "889765",
      },
      {
        value: "SM",
        label: "889764",
      },
    ],
  },
  {
    value: "JH",
    label: "Jharkhand",
    district: [
      {
        value: "RN",
        label: "Ranchi",
      },
      {
        value: "DB",
        label: "Dhanbad",
      },
      {
        value: "GH",
        label: "Giridih",
      },
    ],
    pincode: [
      {
        value: "RN",
        label: "432384",
      },
      {
        value: "DB",
        label: "432980",
      },
      {
        value: "GH",
        label: "432678",
      },
    ],
  },
  {
    value: "KA",
    label: "Karnataka",
    district: [
      {
        value: "BR",
        label: "Bangalore",
      },
      {
        value: "BL",
        label: "Belgaum",
      },
      {
        value: "MS",
        label: "Mysore",
      },
    ],
    pincode: [
      {
        value: "BR",
        label: "234567",
      },
      {
        value: "BL",
        label: "234569",
      },
      {
        value: "MS",
        label: "234905",
      },
    ],
  },
  {
    value: "KL",
    label: "Kerala",
    district: [
      {
        value: "MV",
        label: "Malappuram",
      },
      {
        value: "TV",
        label: "Thiruvananthapuram",
      },
      {
        value: "TS",
        label: "Thrissur",
      },
    ],
    pincode: [
      {
        value: "MV",
        label: "765547",
      },
      {
        value: "TV",
        label: "765980",
      },
      {
        value: "TS",
        label: "765843",
      },
    ],
  },
  {
    value: "LD",
    label: "Lakshadweep",
    district: [
      {
        value: "LD",
        label: "Lakshadweep",
      },
    ],
    pincode: [
      {
        value: "LD",
        label: "493247",
      },
    ],
  },
  {
    value: "MP",
    label: "Madhya Pradesh",
    district: [
      {
        value: "ID",
        label: "Indore",
      },
      {
        value: "JB",
        label: "Jabalpur",
      },
      {
        value: "BP",
        label: "Bhopal",
      },
    ],
    pincode: [
      {
        value: "ID",
        label: "742387",
      },
      {
        value: "JB",
        label: "742903",
      },
      {
        value: "BP",
        label: "742659",
      },
    ],
  },
  {
    vaue: "MH",
    label: "Maharashtra",
    district: [
      {
        value: "KN",
        label: "Konkan",
      },
      {
        value: "KD",
        label: "Khandesh",
      },
      {
        value: "VD",
        label: "Vidarbha",
      },
    ],
    pincode: [
      {
        value: "KN",
        label: "323432",
      },
      {
        value: "KD",
        label: "323456",
      },
      {
        value: "VD",
        label: "323678",
      },
    ],
  },
  {
    value: "MN",
    label: "Manipur",
    district: [
      {
        value: "BPR",
        label: "Bishnupur",
      },
      {
        value: "TBL",
        label: "Thoubal",
      },
      {
        value: "IE",
        label: "Imphal East",
      },
    ],
    pincode: [
      {
        value: "BPR",
        label: "78932",
      },
      {
        value: "TBL",
        label: "789543",
      },
      {
        value: "IE",
        label: "789456",
      },
    ],
  },
  {
    value: "ML",
    label: "Meghalaya",
    district: [
      {
        value: "EGH",
        label: "East Garo Hills",
      },
      {
        value: "SGH",
        label: "South Garo Hills",
      },
      {
        value: "WGH",
        label: "West Garo Hills",
      },
    ],
    pincode: [
      {
        value: "EGH",
        label: "233456",
      },
      {
        value: "SGH",
        label: "233457",
      },
      {
        value: "WGH",
        label: "233458",
      },
    ],
  },
  {
    value: "MZ",
    label: "Mizoram",
    district: [
      {
        value: "AL",
        label: "Aizawl",
      },
      {
        value: "Ko",
        label: "Kolasib",
      },
      {
        value: "LA",
        label: "Lawngtlai",
      },
    ],
    pincode: [
      {
        value: "AL",
        label: "234728",
      },
      {
        value: "Ko",
        label: "234950",
      },
      {
        value: "LA",
        label: "234879",
      },
    ],
  },
  {
    value: "NL",
    label: "Nagaland",
    district: [
      {
        value: "DM",
        label: "Dimapur",
      },
      {
        value: "WK",
        label: "Wokha",
      },
      {
        value: "NK",
        label: "Noklak",
      },
    ],
    pincode: [
      {
        value: "DM",
        label: "473738",
      },
      {
        value: "WK",
        label: "473908",
      },
      {
        value: "NK",
        label: "473893",
      },
    ],
  },
  {
    value: "OR",
    label: "Odisha",
    district: [
      {
        value: "BHK",
        label: "Bhadrak",
      },
      {
        value: "BLS",
        label: "Baleswar",
      },
      {
        value: "CTC",
        label: "Cuttack",
      },
    ],
    pincode: [
      {
        value: "BHK",
        label: "756110",
      },
      {
        value: "BLS",
        label: "756223",
      },
      {
        value: "CTC",
        label: "756334",
      },
    ],
  },
  {
    value: "PY",
    label: "Puducherry",
    district: [
      {
        value: "IN-PY-KA",
        label: "Karaikal",
      },
      {
        value: "IN-PY-MA",
        label: "Mahé",
      },
      {
        value: "IN-PY-PO",
        label: "Puducherry",
      },
    ],
    pincode: [
      {
        value: "IN-PY-KA",
        label: "456388",
      },
      {
        value: "IN-PY-MA",
        label: "458976",
      },
      {
        value: "IN-PY-PO",
        label: "43462",
      },
    ],
  },
  {
    value: "PB",
    label: "Punjab",
    district: [
      {
        value: "AM",
        label: "Amritsar",
      },
      {
        value: "BNL",
        label: "Barnala",
      },
      {
        value: "BA",
        label: "Bathinda",
      },
    ],
    pincode: [
      {
        value: "AM",
        label: "678876",
      },
      {
        value: "BNL",
        label: "678956",
      },
      {
        value: "BA",
        label: "678554",
      },
    ],
  },
  {
    value: "RJ",
    label: "Rajasthan",
    district: [
      {
        value: "JP",
        label: "Jaipur",
      },
      {
        value: "JD",
        label: "Jodhpur",
      },
      {
        value: "UD",
        label: "Udaipur",
      },
    ],
    pincode: [
      {
        value: "JP",
        label: "756890",
      },
      {
        value: "JD",
        label: "756435",
      },
      {
        value: "UD",
        label: "756383",
      },
    ],
  },
  {
    value: "SK",
    label: "Sikkim",
    district: [
      {
        value: "ES",
        label: "East Sikkim",
      },
      {
        value: "WS",
        label: "West Sikkim",
      },
      {
        value: "NS",
        label: "North Sikkim",
      },
    ],
    pincode: [
      {
        value: "ES",
        label: "123321",
      },
      {
        value: "WS",
        label: "123456",
      },
      {
        value: "NS",
        label: "123874",
      },
    ],
  },
  {
    value: "TN",
    label: "Tamil Nadu",
    district: [
      {
        value: "CN",
        label: "Chennai",
      },
      {
        value: "KP",
        label: "Kancheepuram",
      },
      {
        value: "VR",
        label: "Vellore",
      },
    ],
    pincode: [
      {
        value: "CN",
        label: "546667",
      },
      {
        value: "KP",
        label: "546788",
      },
      {
        value: "VR",
        label: "546987",
      },
    ],
  },
  {
    value: "TS",
    label: "Telangana",
    district: [
      {
        value: "AD",
        label: "Adilabad",
      },
      {
        value: "BK",
        label: "Bhadradri Kothagudem",
      },
      {
        value: "HBD",
        label: "Hyderabad",
      },
    ],
    pincode: [
      {
        value: "AD",
        label: "349876",
      },
      {
        value: "BK",
        label: "349988",
      },
      {
        value: "HBD",
        label: "349657",
      },
    ],
  },
  {
    value: "TR",
    label: "Tripura",
    district: [
      {
        value: "DL",
        label: "Dhalai",
      },
      {
        value: "GM",
        label: "Gomati",
      },
      {
        value: "KW",
        label: "Khowai",
      },
    ],
    pincode: [
      {
        value: "DL",
        label: "489976",
      },
      {
        value: "GM",
        label: "489567",
      },
      {
        value: "KW",
        label: "489543",
      },
    ],
  },
  {
    value: "UP",
    label: "Uttar Pradesh",
    district: [
      {
        value: "AR",
        label: "Agra",
      },
      {
        value: "ALR",
        label: "Aligarh",
      },
      {
        value: "ADY",
        label: "Ayodhya",
      },
    ],
    pincode: [
      {
        value: "AR",
        label: "463695",
      },
      {
        value: "ALR",
        label: "467856",
      },
      {
        value: "ADY",
        label: "467985",
      },
    ],
  },
  {
    value: "UK",
    label: "Uttarakhand",
    district: [
      {
        value: "AL",
        label: "Almora",
      },
      {
        value: "BA",
        label: "Bageshwar",
      },
      {
        value: "CL",
        label: "Chamoli",
      },
    ],
    pincode: [
      {
        value: "AL",
        label: "434875",
      },
      {
        value: "BA",
        label: "434786",
      },
      {
        value: "CL",
        label: "434677",
      },
    ],
  },
  {
    value: "WB",
    label: "West Bengal",
    district: [
      {
        value: "AD",
        label: "Alipurduar",
      },
      {
        value: "BN",
        label: "Bankura",
      },
      {
        value: "BR",
        label: "Purba Bardhaman",
      },
    ],
    pincode: [
      {
        value: "AD",
        label: "394239",
      },
      {
        value: "BN",
        label: "394567",
      },
      {
        value: "BR",
        label: "349569",
      },
    ],
  },
];

export default states;
