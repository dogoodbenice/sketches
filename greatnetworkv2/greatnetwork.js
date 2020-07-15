var cy = cytoscape({
  container: document.getElementById('cy'), // container to render in

  elements: [ // Nodes
    {data: { id:"label"}},
  {data: { id:"DIT"}},
  {data: { id:"Market"}},
  {data: { id:"Region"}},
  {data: { id:"Sector"}},
  {data: { id:"Product"}},
  {data: { id:"Service"}},
  {data: { id:"Middle East, Afghanistan and Pakistan"}},
  {data: { id:"Europe"}},
  {data: { id:"Africa"}},
  {data: { id:"Asia Pacific"}},
  {data: { id:"Latin America and Caribbean"}},
  {data: { id:"Eastern Europe and Central Asia"}},
  {data: { id:"North America"}},
  {data: { id:"South Asia"}},
  {data: { id:"China and Hong Kong"}},
  {data: { id:"Algeria"}},
  {data: { id:"Angola"}},
  {data: { id:"Ascension"}},
  {data: { id:"Benin"}},
  {data: { id:"Botswana"}},
  {data: { id:"Burkina Faso"}},
  {data: { id:"Burundi"}},
  {data: { id:"Cameroon"}},
  {data: { id:"Cape Verde"}},
  {data: { id:"Central African Republic"}},
  {data: { id:"Ceuta"}},
  {data: { id:"Chad"}},
  {data: { id:"Comoros"}},
  {data: { id:"Congo"}},
  {data: { id:"Congo (Democratic Republic)"}},
  {data: { id:"Djibouti"}},
  {data: { id:"Egypt"}},
  {data: { id:"Equatorial Guinea"}},
  {data: { id:"Eritrea"}},
  {data: { id:"Eswatini"}},
  {data: { id:"Ethiopia"}},
  {data: { id:"Gabon"}},
  {data: { id:"Ghana"}},
  {data: { id:"Guinea"}},
  {data: { id:"Guinea-Bissau"}},
  {data: { id:"Ivory Coast"}},
  {data: { id:"Kenya"}},
  {data: { id:"Lesotho"}},
  {data: { id:"Liberia"}},
  {data: { id:"Libya"}},
  {data: { id:"Madagascar"}},
  {data: { id:"Malawi"}},
  {data: { id:"Mali"}},
  {data: { id:"Mauritania"}},
  {data: { id:"Mauritius"}},
  {data: { id:"Mayotte"}},
  {data: { id:"Melilla"}},
  {data: { id:"Morocco"}},
  {data: { id:"Mozambique"}},
  {data: { id:"Namibia"}},
  {data: { id:"Niger"}},
  {data: { id:"Nigeria"}},
  {data: { id:"Reunion"}},
  {data: { id:"Rwanda"}},
  {data: { id:"Saint Helena"}},
  {data: { id:"Sao Tome and Principe"}},
  {data: { id:"Senegal"}},
  {data: { id:"Seychelles"}},
  {data: { id:"Sierra Leone"}},
  {data: { id:"Somalia"}},
  {data: { id:"South Africa"}},
  {data: { id:"South Sudan"}},
  {data: { id:"Sudan"}},
  {data: { id:"Tanzania"}},
  {data: { id:"The Gambia"}},
  {data: { id:"Togo"}},
  {data: { id:"Tristan da Cunha"}},
  {data: { id:"Tunisia"}},
  {data: { id:"Uganda"}},
  {data: { id:"Western Sahara"}},
  {data: { id:"Zambia"}},
  {data: { id:"Zimbabwe"}},
  {data: { id:"American Samoa"}},
  {data: { id:"Australia"}},
  {data: { id:"Brunei"}},
  {data: { id:"Cambodia"}},
  {data: { id:"Christmas Island"}},
  {data: { id:"Cocos (Keeling) Islands"}},
  {data: { id:"Cook Islands"}},
  {data: { id:"East Timor"}},
  {data: { id:"Fiji"}},
  {data: { id:"French Polynesia"}},
  {data: { id:"Guam"}},
  {data: { id:"Indonesia"}},
  {data: { id:"Japan"}},
  {data: { id:"Kiribati"}},
  {data: { id:"Laos"}},
  {data: { id:"Malaysia"}},
  {data: { id:"Marshall Islands"}},
  {data: { id:"Micronesia"}},
  {data: { id:"Myanmar (Burma)"}},
  {data: { id:"Nauru"}},
  {data: { id:"New Caledonia"}},
  {data: { id:"New Zealand"}},
  {data: { id:"Niue"}},
  {data: { id:"Norfolk Island"}},
  {data: { id:"Northern Mariana Islands"}},
  {data: { id:"North Korea"}},
  {data: { id:"Palau"}},
  {data: { id:"Papua New Guinea"}},
  {data: { id:"Philippines"}},
  {data: { id:"Samoa"}},
  {data: { id:"Singapore"}},
  {data: { id:"Solomon Islands"}},
  {data: { id:"South Korea"}},
  {data: { id:"Taiwan"}},
  {data: { id:"Thailand"}},
  {data: { id:"Tokelau"}},
  {data: { id:"Tonga"}},
  {data: { id:"Tuvalu"}},
  {data: { id:"Vanuatu"}},
  {data: { id:"Vietnam"}},
  {data: { id:"Wake Island"}},
  {data: { id:"Wallis and Futuna"}},
  {data: { id:"China"}},
  {data: { id:"Hong Kong"}},
  {data: { id:"Macao"}},
  {data: { id:"Armenia"}},
  {data: { id:"Azerbaijan"}},
  {data: { id:"Belarus"}},
  {data: { id:"Georgia"}},
  {data: { id:"Kazakhstan"}},
  {data: { id:"Kyrgyzstan"}},
  {data: { id:"Moldova"}},
  {data: { id:"Mongolia"}},
  {data: { id:"Russia"}},
  {data: { id:"Tajikistan"}},
  {data: { id:"Turkey"}},
  {data: { id:"Turkmenistan"}},
  {data: { id:"Ukraine"}},
  {data: { id:"Uzbekistan"}},
  {data: { id:"Akrotiri"}},
  {data: { id:"Albania"}},
  {data: { id:"Andorra"}},
  {data: { id:"Austria"}},
  {data: { id:"Belgium"}},
  {data: { id:"Bosnia and Herzegovina"}},
  {data: { id:"Bulgaria"}},
  {data: { id:"Croatia"}},
  {data: { id:"Cyprus"}},
  {data: { id:"Czechia"}},
  {data: { id:"Denmark"}},
  {data: { id:"Dhekelia"}},
  {data: { id:"Estonia"}},
  {data: { id:"Faroe Islands"}},
  {data: { id:"Finland"}},
  {data: { id:"France"}},
  {data: { id:"Germany"}},
  {data: { id:"Gibraltar"}},
  {data: { id:"Greece"}},
  {data: { id:"Greenland"}},
  {data: { id:"Guernsey"}},
  {data: { id:"Hungary"}},
  {data: { id:"Iceland"}},
  {data: { id:"Ireland"}},
  {data: { id:"Isle of Man"}},
  {data: { id:"Israel"}},
  {data: { id:"Italy"}},
  {data: { id:"Jersey"}},
  {data: { id:"Kosovo"}},
  {data: { id:"Latvia"}},
  {data: { id:"Liechtenstein"}},
  {data: { id:"Lithuania"}},
  {data: { id:"Luxembourg"}},
  {data: { id:"Malta"}},
  {data: { id:"Monaco"}},
  {data: { id:"Montenegro"}},
  {data: { id:"Netherlands"}},
  {data: { id:"North Macedonia"}},
  {data: { id:"Norway"}},
  {data: { id:"‚àö√ñland Islands"}},
  {data: { id:"Poland"}},
  {data: { id:"Portugal"}},
  {data: { id:"Romania"}},
  {data: { id:"San Marino"}},
  {data: { id:"Serbia"}},
  {data: { id:"Slovakia"}},
  {data: { id:"Slovenia"}},
  {data: { id:"Spain"}},
  {data: { id:"Svalbard and Jan Mayen"}},
  {data: { id:"Sweden"}},
  {data: { id:"Switzerland"}},
  {data: { id:"Vatican City"}},
  {data: { id:"Anguilla"}},
  {data: { id:"Antigua and Barbuda"}},
  {data: { id:"Argentina"}},
  {data: { id:"Aruba"}},
  {data: { id:"Barbados"}},
  {data: { id:"Belize"}},
  {data: { id:"Bermuda"}},
  {data: { id:"Bolivia"}},
  {data: { id:"Bonaire"}},
  {data: { id:"Brazil"}},
  {data: { id:"British Virgin Islands"}},
  {data: { id:"Cayman Islands"}},
  {data: { id:"Chile"}},
  {data: { id:"Colombia"}},
  {data: { id:"Costa Rica"}},
  {data: { id:"Cuba"}},
  {data: { id:"Cura√ßao"}},
  {data: { id:"Dominica"}},
  {data: { id:"Dominican Republic"}},
  {data: { id:"Ecuador"}},
  {data: { id:"El Salvador"}},
  {data: { id:"Falkland Islands"}},
  {data: { id:"French Guiana"}},
  {data: { id:"Grenada"}},
  {data: { id:"Guadeloupe"}},
  {data: { id:"Guatemala"}},
  {data: { id:"Guyana"}},
  {data: { id:"Haiti"}},
  {data: { id:"Honduras"}},
  {data: { id:"Jamaica"}},
  {data: { id:"Martinique"}},
  {data: { id:"Mexico"}},
  {data: { id:"Montserrat"}},
  {data: { id:"Navassa Island"}},
  {data: { id:"Nicaragua"}},
  {data: { id:"Panama"}},
  {data: { id:"Paraguay"}},
  {data: { id:"Peru"}},
  {data: { id:"Pitcairn, Henderson, Ducie and Oeno Islands"}},
  {data: { id:"Saba"}},
  {data: { id:"Saint Barthlemy"}},
  {data: { id:"Saint-Martin (French part)"}},
  {data: { id:"Sint Eustatius"}},
  {data: { id:"Sint Maarten (Dutch part)"}},
  {data: { id:"South Georgia and South Sandwich Islands"}},
  {data: { id:"St Kitts and Nevis"}},
  {data: { id:"St Lucia"}},
  {data: { id:"St Vincent"}},
  {data: { id:"Suriname"}},
  {data: { id:"The Bahamas"}},
  {data: { id:"Trinidad and Tobago"}},
  {data: { id:"Turks and Caicos Islands"}},
  {data: { id:"United States Virgin Islands"}},
  {data: { id:"Uruguay"}},
  {data: { id:"Venezuela"}},
  {data: { id:"Abu Dhabi"}},
  {data: { id:"Afghanistan"}},
  {data: { id:"Ajman"}},
  {data: { id:"Bahrain"}},
  {data: { id:"Dubai"}},
  {data: { id:"Fujairah"}},
  {data: { id:"Iran"}},
  {data: { id:"Iraq"}},
  {data: { id:"Jordan"}},
  {data: { id:"Kuwait"}},
  {data: { id:"Lebanon"}},
  {data: { id:"Occupied Palestinian Territories"}},
  {data: { id:"Oman"}},
  {data: { id:"Pakistan"}},
  {data: { id:"Qatar"}},
  {data: { id:"Ras al-Khaimah"}},
  {data: { id:"Saudi Arabia"}},
  {data: { id:"Sharjah"}},
  {data: { id:"Syria"}},
  {data: { id:"Umm al-Quwain"}},
  {data: { id:"United Arab Emirates"}},
  {data: { id:"Yemen"}},
  {data: { id:"Baker Island"}},
  {data: { id:"Canada"}},
  {data: { id:"Howland Island"}},
  {data: { id:"Jarvis Island"}},
  {data: { id:"Johnston Atoll"}},
  {data: { id:"Kingman Reef"}},
  {data: { id:"Midway Islands"}},
  {data: { id:"Palmyra Atoll"}},
  {data: { id:"Puerto Rico"}},
  {data: { id:"Saint Pierre and Miquelon"}},
  {data: { id:"United States"}},
  {data: { id:"Bangladesh"}},
  {data: { id:"Bhutan"}},
  {data: { id:"British Indian Ocean Territory"}},
  {data: { id:"India"}},
  {data: { id:"Maldives"}},
  {data: { id:"Nepal"}},
  {data: { id:"Sri Lanka"}},
  {data: { id:"Technology and Advanced Manufacturing"}},
  {data: { id:"Healthcare, Life sciences and Bio-Economy"}},
  {data: { id:"Energy and infrastructure"}},
  {data: { id:"Creative, Lifestyle and Learning"}},
  {data: { id:"Defence and Security"}},
  {data: { id:"Financial and Professional Services"}},
    { // Links
      data: { id:"SectorDIT",source:"DIT",target:"Sector"}},
  {data: { id:"MarketDIT",source:"DIT",target:"Market"}},
  {data: { id:"RegionDIT",source:"DIT",target:"Region"}},
  {data: { id:"ProductDIT",source:"DIT",target:"Product"}},
  {data: { id:"ServiceDIT",source:"DIT",target:"Service"}},
  {data: { id:"Middle East, Afghanistan and PakistanRegion",source:"Region",target:"Middle East, Afghanistan and Pakistan"}},
  {data: { id:"EuropeRegion",source:"Region",target:"Europe"}},
  {data: { id:"AfricaRegion",source:"Region",target:"Africa"}},
  {data: { id:"Asia PacificRegion",source:"Region",target:"Asia Pacific"}},
  {data: { id:"Latin America and CaribbeanRegion",source:"Region",target:"Latin America and Caribbean"}},
  {data: { id:"Eastern Europe and Central AsiaRegion",source:"Region",target:"Eastern Europe and Central Asia"}},
  {data: { id:"North AmericaRegion",source:"Region",target:"North America"}},
  {data: { id:"South AsiaRegion",source:"Region",target:"South Asia"}},
  {data: { id:"China and Hong KongRegion",source:"Region",target:"China and Hong Kong"}},
  {data: { id:"AlgeriaAfrica",source:"Africa",target:"Algeria"}},
  {data: { id:"AngolaAfrica",source:"Africa",target:"Angola"}},
  {data: { id:"AscensionAfrica",source:"Africa",target:"Ascension"}},
  {data: { id:"BeninAfrica",source:"Africa",target:"Benin"}},
  {data: { id:"BotswanaAfrica",source:"Africa",target:"Botswana"}},
  {data: { id:"Burkina FasoAfrica",source:"Africa",target:"Burkina Faso"}},
  {data: { id:"BurundiAfrica",source:"Africa",target:"Burundi"}},
  {data: { id:"CameroonAfrica",source:"Africa",target:"Cameroon"}},
  {data: { id:"Cape VerdeAfrica",source:"Africa",target:"Cape Verde"}},
  {data: { id:"Central African RepublicAfrica",source:"Africa",target:"Central African Republic"}},
  {data: { id:"CeutaAfrica",source:"Africa",target:"Ceuta"}},
  {data: { id:"ChadAfrica",source:"Africa",target:"Chad"}},
  {data: { id:"ComorosAfrica",source:"Africa",target:"Comoros"}},
  {data: { id:"CongoAfrica",source:"Africa",target:"Congo"}},
  {data: { id:"Congo (Democratic Republic)Africa",source:"Africa",target:"Congo (Democratic Republic)"}},
  {data: { id:"DjiboutiAfrica",source:"Africa",target:"Djibouti"}},
  {data: { id:"EgyptAfrica",source:"Africa",target:"Egypt"}},
  {data: { id:"Equatorial GuineaAfrica",source:"Africa",target:"Equatorial Guinea"}},
  {data: { id:"EritreaAfrica",source:"Africa",target:"Eritrea"}},
  {data: { id:"EswatiniAfrica",source:"Africa",target:"Eswatini"}},
  {data: { id:"EthiopiaAfrica",source:"Africa",target:"Ethiopia"}},
  {data: { id:"GabonAfrica",source:"Africa",target:"Gabon"}},
  {data: { id:"GhanaAfrica",source:"Africa",target:"Ghana"}},
  {data: { id:"GuineaAfrica",source:"Africa",target:"Guinea"}},
  {data: { id:"Guinea-BissauAfrica",source:"Africa",target:"Guinea-Bissau"}},
  {data: { id:"Ivory CoastAfrica",source:"Africa",target:"Ivory Coast"}},
  {data: { id:"KenyaAfrica",source:"Africa",target:"Kenya"}},
  {data: { id:"LesothoAfrica",source:"Africa",target:"Lesotho"}},
  {data: { id:"LiberiaAfrica",source:"Africa",target:"Liberia"}},
  {data: { id:"LibyaAfrica",source:"Africa",target:"Libya"}},
  {data: { id:"MadagascarAfrica",source:"Africa",target:"Madagascar"}},
  {data: { id:"MalawiAfrica",source:"Africa",target:"Malawi"}},
  {data: { id:"MaliAfrica",source:"Africa",target:"Mali"}},
  {data: { id:"MauritaniaAfrica",source:"Africa",target:"Mauritania"}},
  {data: { id:"MauritiusAfrica",source:"Africa",target:"Mauritius"}},
  {data: { id:"MayotteAfrica",source:"Africa",target:"Mayotte"}},
  {data: { id:"MelillaAfrica",source:"Africa",target:"Melilla"}},
  {data: { id:"MoroccoAfrica",source:"Africa",target:"Morocco"}},
  {data: { id:"MozambiqueAfrica",source:"Africa",target:"Mozambique"}},
  {data: { id:"NamibiaAfrica",source:"Africa",target:"Namibia"}},
  {data: { id:"NigerAfrica",source:"Africa",target:"Niger"}},
  {data: { id:"NigeriaAfrica",source:"Africa",target:"Nigeria"}},
  {data: { id:"ReunionAfrica",source:"Africa",target:"Reunion"}},
  {data: { id:"RwandaAfrica",source:"Africa",target:"Rwanda"}},
  {data: { id:"Saint HelenaAfrica",source:"Africa",target:"Saint Helena"}},
  {data: { id:"Sao Tome and PrincipeAfrica",source:"Africa",target:"Sao Tome and Principe"}},
  {data: { id:"SenegalAfrica",source:"Africa",target:"Senegal"}},
  {data: { id:"SeychellesAfrica",source:"Africa",target:"Seychelles"}},
  {data: { id:"Sierra LeoneAfrica",source:"Africa",target:"Sierra Leone"}},
  {data: { id:"SomaliaAfrica",source:"Africa",target:"Somalia"}},
  {data: { id:"South AfricaAfrica",source:"Africa",target:"South Africa"}},
  {data: { id:"South SudanAfrica",source:"Africa",target:"South Sudan"}},
  {data: { id:"SudanAfrica",source:"Africa",target:"Sudan"}},
  {data: { id:"TanzaniaAfrica",source:"Africa",target:"Tanzania"}},
  {data: { id:"The GambiaAfrica",source:"Africa",target:"The Gambia"}},
  {data: { id:"TogoAfrica",source:"Africa",target:"Togo"}},
  {data: { id:"Tristan da CunhaAfrica",source:"Africa",target:"Tristan da Cunha"}},
  {data: { id:"TunisiaAfrica",source:"Africa",target:"Tunisia"}},
  {data: { id:"UgandaAfrica",source:"Africa",target:"Uganda"}},
  {data: { id:"Western SaharaAfrica",source:"Africa",target:"Western Sahara"}},
  {data: { id:"ZambiaAfrica",source:"Africa",target:"Zambia"}},
  {data: { id:"ZimbabweAfrica",source:"Africa",target:"Zimbabwe"}},
  {data: { id:"American SamoaAsia Pacific",source:"Asia Pacific",target:"American Samoa"}},
  {data: { id:"AustraliaAsia Pacific",source:"Asia Pacific",target:"Australia"}},
  {data: { id:"BruneiAsia Pacific",source:"Asia Pacific",target:"Brunei"}},
  {data: { id:"CambodiaAsia Pacific",source:"Asia Pacific",target:"Cambodia"}},
  {data: { id:"Christmas IslandAsia Pacific",source:"Asia Pacific",target:"Christmas Island"}},
  {data: { id:"Cocos (Keeling) IslandsAsia Pacific",source:"Asia Pacific",target:"Cocos (Keeling) Islands"}},
  {data: { id:"Cook IslandsAsia Pacific",source:"Asia Pacific",target:"Cook Islands"}},
  {data: { id:"East TimorAsia Pacific",source:"Asia Pacific",target:"East Timor"}},
  {data: { id:"FijiAsia Pacific",source:"Asia Pacific",target:"Fiji"}},
  {data: { id:"French PolynesiaAsia Pacific",source:"Asia Pacific",target:"French Polynesia"}},
  {data: { id:"GuamAsia Pacific",source:"Asia Pacific",target:"Guam"}},
  {data: { id:"IndonesiaAsia Pacific",source:"Asia Pacific",target:"Indonesia"}},
  {data: { id:"JapanAsia Pacific",source:"Asia Pacific",target:"Japan"}},
  {data: { id:"KiribatiAsia Pacific",source:"Asia Pacific",target:"Kiribati"}},
  {data: { id:"LaosAsia Pacific",source:"Asia Pacific",target:"Laos"}},
  {data: { id:"MalaysiaAsia Pacific",source:"Asia Pacific",target:"Malaysia"}},
  {data: { id:"Marshall IslandsAsia Pacific",source:"Asia Pacific",target:"Marshall Islands"}},
  {data: { id:"MicronesiaAsia Pacific",source:"Asia Pacific",target:"Micronesia"}},
  {data: { id:"Myanmar (Burma)Asia Pacific",source:"Asia Pacific",target:"Myanmar (Burma)"}},
  {data: { id:"NauruAsia Pacific",source:"Asia Pacific",target:"Nauru"}},
  {data: { id:"New CaledoniaAsia Pacific",source:"Asia Pacific",target:"New Caledonia"}},
  {data: { id:"New ZealandAsia Pacific",source:"Asia Pacific",target:"New Zealand"}},
  {data: { id:"NiueAsia Pacific",source:"Asia Pacific",target:"Niue"}},
  {data: { id:"Norfolk IslandAsia Pacific",source:"Asia Pacific",target:"Norfolk Island"}},
  {data: { id:"Northern Mariana IslandsAsia Pacific",source:"Asia Pacific",target:"Northern Mariana Islands"}},
  {data: { id:"North KoreaAsia Pacific",source:"Asia Pacific",target:"North Korea"}},
  {data: { id:"PalauAsia Pacific",source:"Asia Pacific",target:"Palau"}},
  {data: { id:"Papua New GuineaAsia Pacific",source:"Asia Pacific",target:"Papua New Guinea"}},
  {data: { id:"PhilippinesAsia Pacific",source:"Asia Pacific",target:"Philippines"}},
  {data: { id:"SamoaAsia Pacific",source:"Asia Pacific",target:"Samoa"}},
  {data: { id:"SingaporeAsia Pacific",source:"Asia Pacific",target:"Singapore"}},
  {data: { id:"Solomon IslandsAsia Pacific",source:"Asia Pacific",target:"Solomon Islands"}},
  {data: { id:"South KoreaAsia Pacific",source:"Asia Pacific",target:"South Korea"}},
  {data: { id:"TaiwanAsia Pacific",source:"Asia Pacific",target:"Taiwan"}},
  {data: { id:"ThailandAsia Pacific",source:"Asia Pacific",target:"Thailand"}},
  {data: { id:"TokelauAsia Pacific",source:"Asia Pacific",target:"Tokelau"}},
  {data: { id:"TongaAsia Pacific",source:"Asia Pacific",target:"Tonga"}},
  {data: { id:"TuvaluAsia Pacific",source:"Asia Pacific",target:"Tuvalu"}},
  {data: { id:"VanuatuAsia Pacific",source:"Asia Pacific",target:"Vanuatu"}},
  {data: { id:"VietnamAsia Pacific",source:"Asia Pacific",target:"Vietnam"}},
  {data: { id:"Wake IslandAsia Pacific",source:"Asia Pacific",target:"Wake Island"}},
  {data: { id:"Wallis and FutunaAsia Pacific",source:"Asia Pacific",target:"Wallis and Futuna"}},
  {data: { id:"ChinaChina and Hong Kong",source:"China and Hong Kong",target:"China"}},
  {data: { id:"Hong KongChina and Hong Kong",source:"China and Hong Kong",target:"Hong Kong"}},
  {data: { id:"MacaoChina and Hong Kong",source:"China and Hong Kong",target:"Macao"}},
  {data: { id:"ArmeniaEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Armenia"}},
  {data: { id:"AzerbaijanEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Azerbaijan"}},
  {data: { id:"BelarusEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Belarus"}},
  {data: { id:"GeorgiaEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Georgia"}},
  {data: { id:"KazakhstanEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Kazakhstan"}},
  {data: { id:"KyrgyzstanEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Kyrgyzstan"}},
  {data: { id:"MoldovaEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Moldova"}},
  {data: { id:"MongoliaEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Mongolia"}},
  {data: { id:"RussiaEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Russia"}},
  {data: { id:"TajikistanEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Tajikistan"}},
  {data: { id:"TurkeyEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Turkey"}},
  {data: { id:"TurkmenistanEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Turkmenistan"}},
  {data: { id:"UkraineEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Ukraine"}},
  {data: { id:"UzbekistanEastern Europe and Central Asia",source:"Eastern Europe and Central Asia",target:"Uzbekistan"}},
  {data: { id:"AkrotiriEurope",source:"Europe",target:"Akrotiri"}},
  {data: { id:"AlbaniaEurope",source:"Europe",target:"Albania"}},
  {data: { id:"AndorraEurope",source:"Europe",target:"Andorra"}},
  {data: { id:"AustriaEurope",source:"Europe",target:"Austria"}},
  {data: { id:"BelgiumEurope",source:"Europe",target:"Belgium"}},
  {data: { id:"Bosnia and HerzegovinaEurope",source:"Europe",target:"Bosnia and Herzegovina"}},
  {data: { id:"BulgariaEurope",source:"Europe",target:"Bulgaria"}},
  {data: { id:"CroatiaEurope",source:"Europe",target:"Croatia"}},
  {data: { id:"CyprusEurope",source:"Europe",target:"Cyprus"}},
  {data: { id:"CzechiaEurope",source:"Europe",target:"Czechia"}},
  {data: { id:"DenmarkEurope",source:"Europe",target:"Denmark"}},
  {data: { id:"DhekeliaEurope",source:"Europe",target:"Dhekelia"}},
  {data: { id:"EstoniaEurope",source:"Europe",target:"Estonia"}},
  {data: { id:"Faroe IslandsEurope",source:"Europe",target:"Faroe Islands"}},
  {data: { id:"FinlandEurope",source:"Europe",target:"Finland"}},
  {data: { id:"FranceEurope",source:"Europe",target:"France"}},
  {data: { id:"GermanyEurope",source:"Europe",target:"Germany"}},
  {data: { id:"GibraltarEurope",source:"Europe",target:"Gibraltar"}},
  {data: { id:"GreeceEurope",source:"Europe",target:"Greece"}},
  {data: { id:"GreenlandEurope",source:"Europe",target:"Greenland"}},
  {data: { id:"GuernseyEurope",source:"Europe",target:"Guernsey"}},
  {data: { id:"HungaryEurope",source:"Europe",target:"Hungary"}},
  {data: { id:"IcelandEurope",source:"Europe",target:"Iceland"}},
  {data: { id:"IrelandEurope",source:"Europe",target:"Ireland"}},
  {data: { id:"Isle of ManEurope",source:"Europe",target:"Isle of Man"}},
  {data: { id:"IsraelEurope",source:"Europe",target:"Israel"}},
  {data: { id:"ItalyEurope",source:"Europe",target:"Italy"}},
  {data: { id:"JerseyEurope",source:"Europe",target:"Jersey"}},
  {data: { id:"KosovoEurope",source:"Europe",target:"Kosovo"}},
  {data: { id:"LatviaEurope",source:"Europe",target:"Latvia"}},
  {data: { id:"LiechtensteinEurope",source:"Europe",target:"Liechtenstein"}},
  {data: { id:"LithuaniaEurope",source:"Europe",target:"Lithuania"}},
  {data: { id:"LuxembourgEurope",source:"Europe",target:"Luxembourg"}},
  {data: { id:"MaltaEurope",source:"Europe",target:"Malta"}},
  {data: { id:"MonacoEurope",source:"Europe",target:"Monaco"}},
  {data: { id:"MontenegroEurope",source:"Europe",target:"Montenegro"}},
  {data: { id:"NetherlandsEurope",source:"Europe",target:"Netherlands"}},
  {data: { id:"North MacedoniaEurope",source:"Europe",target:"North Macedonia"}},
  {data: { id:"NorwayEurope",source:"Europe",target:"Norway"}},
  {data: { id:"‚àö√ñland IslandsEurope",source:"Europe",target:"‚àö√ñland Islands"}},
  {data: { id:"PolandEurope",source:"Europe",target:"Poland"}},
  {data: { id:"PortugalEurope",source:"Europe",target:"Portugal"}},
  {data: { id:"RomaniaEurope",source:"Europe",target:"Romania"}},
  {data: { id:"San MarinoEurope",source:"Europe",target:"San Marino"}},
  {data: { id:"SerbiaEurope",source:"Europe",target:"Serbia"}},
  {data: { id:"SlovakiaEurope",source:"Europe",target:"Slovakia"}},
  {data: { id:"SloveniaEurope",source:"Europe",target:"Slovenia"}},
  {data: { id:"SpainEurope",source:"Europe",target:"Spain"}},
  {data: { id:"Svalbard and Jan MayenEurope",source:"Europe",target:"Svalbard and Jan Mayen"}},
  {data: { id:"SwedenEurope",source:"Europe",target:"Sweden"}},
  {data: { id:"SwitzerlandEurope",source:"Europe",target:"Switzerland"}},
  {data: { id:"Vatican CityEurope",source:"Europe",target:"Vatican City"}},
  {data: { id:"AnguillaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Anguilla"}},
  {data: { id:"Antigua and BarbudaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Antigua and Barbuda"}},
  {data: { id:"ArgentinaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Argentina"}},
  {data: { id:"ArubaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Aruba"}},
  {data: { id:"BarbadosLatin America and Caribbean",source:"Latin America and Caribbean",target:"Barbados"}},
  {data: { id:"BelizeLatin America and Caribbean",source:"Latin America and Caribbean",target:"Belize"}},
  {data: { id:"BermudaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Bermuda"}},
  {data: { id:"BoliviaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Bolivia"}},
  {data: { id:"BonaireLatin America and Caribbean",source:"Latin America and Caribbean",target:"Bonaire"}},
  {data: { id:"BrazilLatin America and Caribbean",source:"Latin America and Caribbean",target:"Brazil"}},
  {data: { id:"British Virgin IslandsLatin America and Caribbean",source:"Latin America and Caribbean",target:"British Virgin Islands"}},
  {data: { id:"Cayman IslandsLatin America and Caribbean",source:"Latin America and Caribbean",target:"Cayman Islands"}},
  {data: { id:"ChileLatin America and Caribbean",source:"Latin America and Caribbean",target:"Chile"}},
  {data: { id:"ColombiaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Colombia"}},
  {data: { id:"Costa RicaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Costa Rica"}},
  {data: { id:"CubaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Cuba"}},
  {data: { id:"Cura√ßaoLatin America and Caribbean",source:"Latin America and Caribbean",target:"Cura√ßao"}},
  {data: { id:"DominicaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Dominica"}},
  {data: { id:"Dominican RepublicLatin America and Caribbean",source:"Latin America and Caribbean",target:"Dominican Republic"}},
  {data: { id:"EcuadorLatin America and Caribbean",source:"Latin America and Caribbean",target:"Ecuador"}},
  {data: { id:"El SalvadorLatin America and Caribbean",source:"Latin America and Caribbean",target:"El Salvador"}},
  {data: { id:"Falkland IslandsLatin America and Caribbean",source:"Latin America and Caribbean",target:"Falkland Islands"}},
  {data: { id:"French GuianaLatin America and Caribbean",source:"Latin America and Caribbean",target:"French Guiana"}},
  {data: { id:"GrenadaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Grenada"}},
  {data: { id:"GuadeloupeLatin America and Caribbean",source:"Latin America and Caribbean",target:"Guadeloupe"}},
  {data: { id:"GuatemalaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Guatemala"}},
  {data: { id:"GuyanaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Guyana"}},
  {data: { id:"HaitiLatin America and Caribbean",source:"Latin America and Caribbean",target:"Haiti"}},
  {data: { id:"HondurasLatin America and Caribbean",source:"Latin America and Caribbean",target:"Honduras"}},
  {data: { id:"JamaicaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Jamaica"}},
  {data: { id:"MartiniqueLatin America and Caribbean",source:"Latin America and Caribbean",target:"Martinique"}},
  {data: { id:"MexicoLatin America and Caribbean",source:"Latin America and Caribbean",target:"Mexico"}},
  {data: { id:"MontserratLatin America and Caribbean",source:"Latin America and Caribbean",target:"Montserrat"}},
  {data: { id:"Navassa IslandLatin America and Caribbean",source:"Latin America and Caribbean",target:"Navassa Island"}},
  {data: { id:"NicaraguaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Nicaragua"}},
  {data: { id:"PanamaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Panama"}},
  {data: { id:"ParaguayLatin America and Caribbean",source:"Latin America and Caribbean",target:"Paraguay"}},
  {data: { id:"PeruLatin America and Caribbean",source:"Latin America and Caribbean",target:"Peru"}},
  {data: { id:"Pitcairn, Henderson, Ducie and Oeno IslandsLatin America and Caribbean",source:"Latin America and Caribbean",target:"Pitcairn, Henderson, Ducie and Oeno Islands"}},
  {data: { id:"SabaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Saba"}},
  {data: { id:"Saint BarthlemyLatin America and Caribbean",source:"Latin America and Caribbean",target:"Saint Barthlemy"}},
  {data: { id:"Saint-Martin (French part)Latin America and Caribbean",source:"Latin America and Caribbean",target:"Saint-Martin (French part)"}},
  {data: { id:"Sint EustatiusLatin America and Caribbean",source:"Latin America and Caribbean",target:"Sint Eustatius"}},
  {data: { id:"Sint Maarten (Dutch part)Latin America and Caribbean",source:"Latin America and Caribbean",target:"Sint Maarten (Dutch part)"}},
  {data: { id:"South Georgia and South Sandwich IslandsLatin America and Caribbean",source:"Latin America and Caribbean",target:"South Georgia and South Sandwich Islands"}},
  {data: { id:"St Kitts and NevisLatin America and Caribbean",source:"Latin America and Caribbean",target:"St Kitts and Nevis"}},
  {data: { id:"St LuciaLatin America and Caribbean",source:"Latin America and Caribbean",target:"St Lucia"}},
  {data: { id:"St VincentLatin America and Caribbean",source:"Latin America and Caribbean",target:"St Vincent"}},
  {data: { id:"SurinameLatin America and Caribbean",source:"Latin America and Caribbean",target:"Suriname"}},
  {data: { id:"The BahamasLatin America and Caribbean",source:"Latin America and Caribbean",target:"The Bahamas"}},
  {data: { id:"Trinidad and TobagoLatin America and Caribbean",source:"Latin America and Caribbean",target:"Trinidad and Tobago"}},
  {data: { id:"Turks and Caicos IslandsLatin America and Caribbean",source:"Latin America and Caribbean",target:"Turks and Caicos Islands"}},
  {data: { id:"United States Virgin IslandsLatin America and Caribbean",source:"Latin America and Caribbean",target:"United States Virgin Islands"}},
  {data: { id:"UruguayLatin America and Caribbean",source:"Latin America and Caribbean",target:"Uruguay"}},
  {data: { id:"VenezuelaLatin America and Caribbean",source:"Latin America and Caribbean",target:"Venezuela"}},
  {data: { id:"Abu DhabiMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Abu Dhabi"}},
  {data: { id:"AfghanistanMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Afghanistan"}},
  {data: { id:"AjmanMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Ajman"}},
  {data: { id:"BahrainMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Bahrain"}},
  {data: { id:"DubaiMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Dubai"}},
  {data: { id:"FujairahMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Fujairah"}},
  {data: { id:"IranMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Iran"}},
  {data: { id:"IraqMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Iraq"}},
  {data: { id:"JordanMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Jordan"}},
  {data: { id:"KuwaitMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Kuwait"}},
  {data: { id:"LebanonMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Lebanon"}},
  {data: { id:"Occupied Palestinian TerritoriesMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Occupied Palestinian Territories"}},
  {data: { id:"OmanMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Oman"}},
  {data: { id:"PakistanMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Pakistan"}},
  {data: { id:"QatarMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Qatar"}},
  {data: { id:"Ras al-KhaimahMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Ras al-Khaimah"}},
  {data: { id:"Saudi ArabiaMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Saudi Arabia"}},
  {data: { id:"SharjahMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Sharjah"}},
  {data: { id:"SyriaMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Syria"}},
  {data: { id:"Umm al-QuwainMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Umm al-Quwain"}},
  {data: { id:"United Arab EmiratesMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"United Arab Emirates"}},
  {data: { id:"YemenMiddle East, Afghanistan and Pakistan",source:"Middle East, Afghanistan and Pakistan",target:"Yemen"}},
  {data: { id:"Baker IslandNorth America",source:"North America",target:"Baker Island"}},
  {data: { id:"CanadaNorth America",source:"North America",target:"Canada"}},
  {data: { id:"Howland IslandNorth America",source:"North America",target:"Howland Island"}},
  {data: { id:"Jarvis IslandNorth America",source:"North America",target:"Jarvis Island"}},
  {data: { id:"Johnston AtollNorth America",source:"North America",target:"Johnston Atoll"}},
  {data: { id:"Kingman ReefNorth America",source:"North America",target:"Kingman Reef"}},
  {data: { id:"Midway IslandsNorth America",source:"North America",target:"Midway Islands"}},
  {data: { id:"Palmyra AtollNorth America",source:"North America",target:"Palmyra Atoll"}},
  {data: { id:"Puerto RicoNorth America",source:"North America",target:"Puerto Rico"}},
  {data: { id:"Saint Pierre and MiquelonNorth America",source:"North America",target:"Saint Pierre and Miquelon"}},
  {data: { id:"United StatesNorth America",source:"North America",target:"United States"}},
  {data: { id:"BangladeshSouth Asia",source:"South Asia",target:"Bangladesh"}},
  {data: { id:"BhutanSouth Asia",source:"South Asia",target:"Bhutan"}},
  {data: { id:"British Indian Ocean TerritorySouth Asia",source:"South Asia",target:"British Indian Ocean Territory"}},
  {data: { id:"IndiaSouth Asia",source:"South Asia",target:"India"}},
  {data: { id:"MaldivesSouth Asia",source:"South Asia",target:"Maldives"}},
  {data: { id:"NepalSouth Asia",source:"South Asia",target:"Nepal"}},
  {data: { id:"Sri LankaSouth Asia",source:"South Asia",target:"Sri Lanka"}}
  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 1,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ],

  layout: {
    name: 'cose',
    padding: 0,
  },
});

let options = {
  name: 'cose',

  // Called on `layoutready`
  ready: function(){},

  // Called on `layoutstop`
  stop: function(){},

  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: true,

  // Easing of the animation for animate:'end'
  animationEasing: undefined,

  // The duration of the animation for animate:'end'
  animationDuration: undefined,

  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function ( node, i ){ return true; },


  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,

  // Number of iterations between consecutive screen positions update
  refresh: 20,

  // Whether to fit the network view after when done
  fit: true,

  // Padding on fit
  padding: 30,

  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: undefined,

  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: false,

  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: false,

  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,

  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function( node ){ return 2048; },

  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,

  // Ideal edge (non nested) length
  idealEdgeLength: function( edge ){ return 32; },

  // Divisor to compute edge forces
  edgeElasticity: function( edge ){ return 32; },

  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,

  // Gravity force (constant)
  gravity: 1,

  // Maximum number of iterations to perform
  numIter: 1000,

  // Initial temperature (maximum node displacement)
  initialTemp: 1000,

  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,

  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1.0
};

cy.layout( options );