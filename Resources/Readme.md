
## Unit 6 | Assignment - What's the Weather Like?
* There is a clear connection between Temperature and Latitude
* Humidity doesn't have a connection between Latitude
* Cloudiness is not connected to Latitude


```python
# Setup Dependencies
import random
import json
import requests
import pandas as pd
import matplotlib.pyplot as plt

#Import Citipy
from citipy import citipy

#Import api_key
from config import api_key
```


```python
# Make the API Call Using OWM's Current Weather Method
url = "http://api.openweathermap.org/data/2.5/weather?"
units = "imperial"
temp = []
lat = []
hum = []
cloud = []
wind = []
cities = set()

# Select the Number of Cities
number_of_cities = 501

# URL String for Jason Call
query_url = f"{url}appid={api_key}&units={units}&q="
```


```python
# Loop to get all of the Data
while (len(set(cities)) < number_of_cities):
    
    #Citys Choosen by Random Lat and Lon
    city = citipy.nearest_city(random.uniform(-90,90), random.uniform(-180,180))
    response = requests.get(query_url + city.city_name).json()
    
    #Check if City is in OSW's Database
    if response['cod'] == '404':
        continue
    else:
        prev_number_of_cities = len(cities)
        cities.add(city.city_name)
        if prev_number_of_cities != len(cities):
            temp.append(response['main']['temp'])
            lat.append(response['coord']['lat'])
            hum.append(response['main']['humidity'])
            cloud.append(response['clouds']['all'])
            wind.append(response['wind']['speed'])
            print(f'-----------------------------\nProcessing Record {len(set(cities))} of {number_of_cities} | {city.city_name} {query_url + city.city_name}'
            )

```

    -----------------------------
    Processing Record 1 of 501 | flinders http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=flinders
    -----------------------------
    Processing Record 2 of 501 | kyzyl-suu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kyzyl-suu
    -----------------------------
    Processing Record 3 of 501 | rotnes http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rotnes
    -----------------------------
    Processing Record 4 of 501 | hermanus http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hermanus
    -----------------------------
    Processing Record 5 of 501 | poum http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=poum
    -----------------------------
    Processing Record 6 of 501 | saint-philippe http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saint-philippe
    -----------------------------
    Processing Record 7 of 501 | esperance http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=esperance
    -----------------------------
    Processing Record 8 of 501 | east london http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=east london
    -----------------------------
    Processing Record 9 of 501 | hobart http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hobart
    -----------------------------
    Processing Record 10 of 501 | kapaa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kapaa
    -----------------------------
    Processing Record 11 of 501 | jamestown http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=jamestown
    -----------------------------
    Processing Record 12 of 501 | kahului http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kahului
    -----------------------------
    Processing Record 13 of 501 | buckingham http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=buckingham
    -----------------------------
    Processing Record 14 of 501 | severo-kurilsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=severo-kurilsk
    -----------------------------
    Processing Record 15 of 501 | xai-xai http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=xai-xai
    -----------------------------
    Processing Record 16 of 501 | vestmanna http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vestmanna
    -----------------------------
    Processing Record 17 of 501 | fairbanks http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=fairbanks
    -----------------------------
    Processing Record 18 of 501 | aswan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=aswan
    -----------------------------
    Processing Record 19 of 501 | kavaratti http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kavaratti
    -----------------------------
    Processing Record 20 of 501 | bandipur http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bandipur
    -----------------------------
    Processing Record 21 of 501 | bethlehem http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bethlehem
    -----------------------------
    Processing Record 22 of 501 | lerwick http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lerwick
    -----------------------------
    Processing Record 23 of 501 | husavik http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=husavik
    -----------------------------
    Processing Record 24 of 501 | guilin http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=guilin
    -----------------------------
    Processing Record 25 of 501 | avarua http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=avarua
    -----------------------------
    Processing Record 26 of 501 | mataura http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mataura
    -----------------------------
    Processing Record 27 of 501 | port alfred http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=port alfred
    -----------------------------
    Processing Record 28 of 501 | abadan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=abadan
    -----------------------------
    Processing Record 29 of 501 | hithadhoo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hithadhoo
    -----------------------------
    Processing Record 30 of 501 | chontalpa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=chontalpa
    -----------------------------
    Processing Record 31 of 501 | pevek http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pevek
    -----------------------------
    Processing Record 32 of 501 | conceicao do araguaia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=conceicao do araguaia
    -----------------------------
    Processing Record 33 of 501 | clyde river http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=clyde river
    -----------------------------
    Processing Record 34 of 501 | chuy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=chuy
    -----------------------------
    Processing Record 35 of 501 | paamiut http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=paamiut
    -----------------------------
    Processing Record 36 of 501 | tshikapa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tshikapa
    -----------------------------
    Processing Record 37 of 501 | honningsvag http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=honningsvag
    -----------------------------
    Processing Record 38 of 501 | ushuaia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ushuaia
    -----------------------------
    Processing Record 39 of 501 | verkh-usugli http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=verkh-usugli
    -----------------------------
    Processing Record 40 of 501 | cordoba http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cordoba
    -----------------------------
    Processing Record 41 of 501 | hofn http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hofn
    -----------------------------
    Processing Record 42 of 501 | saskylakh http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saskylakh
    -----------------------------
    Processing Record 43 of 501 | wendo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=wendo
    -----------------------------
    Processing Record 44 of 501 | hilo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hilo
    -----------------------------
    Processing Record 45 of 501 | dingle http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=dingle
    -----------------------------
    Processing Record 46 of 501 | abeche http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=abeche
    -----------------------------
    Processing Record 47 of 501 | busselton http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=busselton
    -----------------------------
    Processing Record 48 of 501 | georgetown http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=georgetown
    -----------------------------
    Processing Record 49 of 501 | fort nelson http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=fort nelson
    -----------------------------
    Processing Record 50 of 501 | houma http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=houma
    -----------------------------
    Processing Record 51 of 501 | cairns http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cairns
    -----------------------------
    Processing Record 52 of 501 | mar del plata http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mar del plata
    -----------------------------
    Processing Record 53 of 501 | havelock http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=havelock
    -----------------------------
    Processing Record 54 of 501 | ust-kuyga http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ust-kuyga
    -----------------------------
    Processing Record 55 of 501 | wanning http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=wanning
    -----------------------------
    Processing Record 56 of 501 | mandalgovi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mandalgovi
    -----------------------------
    Processing Record 57 of 501 | bredasdorp http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bredasdorp
    -----------------------------
    Processing Record 58 of 501 | thompson http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=thompson
    -----------------------------
    Processing Record 59 of 501 | pangnirtung http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pangnirtung
    -----------------------------
    Processing Record 60 of 501 | saint anthony http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saint anthony
    -----------------------------
    Processing Record 61 of 501 | nodeland http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nodeland
    -----------------------------
    Processing Record 62 of 501 | arraial do cabo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=arraial do cabo
    -----------------------------
    Processing Record 63 of 501 | solaro http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=solaro
    -----------------------------
    Processing Record 64 of 501 | santiago del estero http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=santiago del estero
    -----------------------------
    Processing Record 65 of 501 | lira http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lira
    -----------------------------
    Processing Record 66 of 501 | gorlitz http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=gorlitz
    -----------------------------
    Processing Record 67 of 501 | talkha http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=talkha
    -----------------------------
    Processing Record 68 of 501 | port elizabeth http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=port elizabeth
    -----------------------------
    Processing Record 69 of 501 | searcy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=searcy
    -----------------------------
    Processing Record 70 of 501 | yellowknife http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=yellowknife
    -----------------------------
    Processing Record 71 of 501 | chambas http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=chambas
    -----------------------------
    Processing Record 72 of 501 | constitucion http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=constitucion
    -----------------------------
    Processing Record 73 of 501 | albany http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=albany
    -----------------------------
    Processing Record 74 of 501 | necochea http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=necochea
    -----------------------------
    Processing Record 75 of 501 | palana http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=palana
    -----------------------------
    Processing Record 76 of 501 | butaritari http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=butaritari
    -----------------------------
    Processing Record 77 of 501 | borovskoy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=borovskoy
    -----------------------------
    Processing Record 78 of 501 | pochutla http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pochutla
    -----------------------------
    Processing Record 79 of 501 | rikitea http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rikitea
    -----------------------------
    Processing Record 80 of 501 | honiara http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=honiara
    -----------------------------
    Processing Record 81 of 501 | darhan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=darhan
    -----------------------------
    Processing Record 82 of 501 | cajamarca http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cajamarca
    -----------------------------
    Processing Record 83 of 501 | cockburn town http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cockburn town
    -----------------------------
    Processing Record 84 of 501 | road town http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=road town
    -----------------------------
    Processing Record 85 of 501 | batagay http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=batagay
    -----------------------------
    Processing Record 86 of 501 | ribeira grande http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ribeira grande
    -----------------------------
    Processing Record 87 of 501 | cape town http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cape town
    -----------------------------
    Processing Record 88 of 501 | punta arenas http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=punta arenas
    -----------------------------
    Processing Record 89 of 501 | longyearbyen http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=longyearbyen
    -----------------------------
    Processing Record 90 of 501 | atuona http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=atuona
    -----------------------------
    Processing Record 91 of 501 | gat http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=gat
    -----------------------------
    Processing Record 92 of 501 | kruisfontein http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kruisfontein
    -----------------------------
    Processing Record 93 of 501 | ponta do sol http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ponta do sol
    -----------------------------
    Processing Record 94 of 501 | meulaboh http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=meulaboh
    -----------------------------
    Processing Record 95 of 501 | makinsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=makinsk
    -----------------------------
    Processing Record 96 of 501 | saint george http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saint george
    -----------------------------
    Processing Record 97 of 501 | new norfolk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=new norfolk
    -----------------------------
    Processing Record 98 of 501 | kisangani http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kisangani
    -----------------------------
    Processing Record 99 of 501 | weligama http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=weligama
    -----------------------------
    Processing Record 100 of 501 | port hedland http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=port hedland
    -----------------------------
    Processing Record 101 of 501 | chokurdakh http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=chokurdakh
    -----------------------------
    Processing Record 102 of 501 | sur http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sur
    -----------------------------
    Processing Record 103 of 501 | tessalit http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tessalit
    -----------------------------
    Processing Record 104 of 501 | kununurra http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kununurra
    -----------------------------
    Processing Record 105 of 501 | praia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=praia
    -----------------------------
    Processing Record 106 of 501 | adrar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=adrar
    -----------------------------
    Processing Record 107 of 501 | bluff http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bluff
    -----------------------------
    Processing Record 108 of 501 | atar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=atar
    -----------------------------
    Processing Record 109 of 501 | ancud http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ancud
    -----------------------------
    Processing Record 110 of 501 | dolinsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=dolinsk
    -----------------------------
    Processing Record 111 of 501 | iqaluit http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=iqaluit
    -----------------------------
    Processing Record 112 of 501 | poya http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=poya
    -----------------------------
    Processing Record 113 of 501 | tasiilaq http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tasiilaq
    -----------------------------
    Processing Record 114 of 501 | vila franca do campo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vila franca do campo
    -----------------------------
    Processing Record 115 of 501 | kon tum http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kon tum
    -----------------------------
    Processing Record 116 of 501 | khatanga http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=khatanga
    -----------------------------
    Processing Record 117 of 501 | praya http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=praya
    -----------------------------
    Processing Record 118 of 501 | carnarvon http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=carnarvon
    -----------------------------
    Processing Record 119 of 501 | upernavik http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=upernavik
    -----------------------------
    Processing Record 120 of 501 | perth http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=perth
    -----------------------------
    Processing Record 121 of 501 | bilma http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bilma
    -----------------------------
    Processing Record 122 of 501 | katsuura http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=katsuura
    -----------------------------
    Processing Record 123 of 501 | naryan-mar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=naryan-mar
    -----------------------------
    Processing Record 124 of 501 | tahe http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tahe
    -----------------------------
    Processing Record 125 of 501 | barrow http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=barrow
    -----------------------------
    Processing Record 126 of 501 | sulangan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sulangan
    -----------------------------
    Processing Record 127 of 501 | tautira http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tautira
    -----------------------------
    Processing Record 128 of 501 | comodoro rivadavia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=comodoro rivadavia
    -----------------------------
    Processing Record 129 of 501 | aden http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=aden
    -----------------------------
    Processing Record 130 of 501 | qaanaaq http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=qaanaaq
    -----------------------------
    Processing Record 131 of 501 | mbulu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mbulu
    -----------------------------
    Processing Record 132 of 501 | isangel http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=isangel
    -----------------------------
    Processing Record 133 of 501 | vaini http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vaini
    -----------------------------
    Processing Record 134 of 501 | poplar bluff http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=poplar bluff
    -----------------------------
    Processing Record 135 of 501 | dubai http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=dubai
    -----------------------------
    Processing Record 136 of 501 | dikson http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=dikson
    -----------------------------
    Processing Record 137 of 501 | vikhorevka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vikhorevka
    -----------------------------
    Processing Record 138 of 501 | baracoa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=baracoa
    -----------------------------
    Processing Record 139 of 501 | kungurtug http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kungurtug
    -----------------------------
    Processing Record 140 of 501 | hasaki http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hasaki
    -----------------------------
    Processing Record 141 of 501 | moose factory http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=moose factory
    -----------------------------
    Processing Record 142 of 501 | visby http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=visby
    -----------------------------
    Processing Record 143 of 501 | iaciara http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=iaciara
    -----------------------------
    Processing Record 144 of 501 | carlsbad http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=carlsbad
    -----------------------------
    Processing Record 145 of 501 | kuhdasht http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kuhdasht
    -----------------------------
    Processing Record 146 of 501 | goderich http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=goderich
    -----------------------------
    Processing Record 147 of 501 | port augusta http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=port augusta
    -----------------------------
    Processing Record 148 of 501 | zabid http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=zabid
    -----------------------------
    Processing Record 149 of 501 | ilam http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ilam
    -----------------------------
    Processing Record 150 of 501 | matara http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=matara
    -----------------------------
    Processing Record 151 of 501 | ambon http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ambon
    -----------------------------
    Processing Record 152 of 501 | cherskiy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cherskiy
    -----------------------------
    Processing Record 153 of 501 | nalut http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nalut
    -----------------------------
    Processing Record 154 of 501 | osijek http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=osijek
    -----------------------------
    Processing Record 155 of 501 | bell ville http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bell ville
    -----------------------------
    Processing Record 156 of 501 | leningradskiy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=leningradskiy
    -----------------------------
    Processing Record 157 of 501 | thinadhoo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=thinadhoo
    -----------------------------
    Processing Record 158 of 501 | kamaishi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kamaishi
    -----------------------------
    Processing Record 159 of 501 | castro http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=castro
    -----------------------------
    Processing Record 160 of 501 | lompoc http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lompoc
    -----------------------------
    Processing Record 161 of 501 | kaitangata http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kaitangata
    -----------------------------
    Processing Record 162 of 501 | haines junction http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=haines junction
    -----------------------------
    Processing Record 163 of 501 | tura http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tura
    -----------------------------
    Processing Record 164 of 501 | dicabisagan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=dicabisagan
    -----------------------------
    Processing Record 165 of 501 | sovetskoye http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sovetskoye
    -----------------------------
    Processing Record 166 of 501 | palmer http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=palmer
    -----------------------------
    Processing Record 167 of 501 | kodiak http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kodiak
    -----------------------------
    Processing Record 168 of 501 | eregli http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=eregli
    -----------------------------
    Processing Record 169 of 501 | archidona http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=archidona
    -----------------------------
    Processing Record 170 of 501 | nikolskoye http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nikolskoye
    -----------------------------
    Processing Record 171 of 501 | camopi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=camopi
    -----------------------------
    Processing Record 172 of 501 | la palma http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=la palma
    -----------------------------
    Processing Record 173 of 501 | portland http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=portland
    -----------------------------
    Processing Record 174 of 501 | souillac http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=souillac
    -----------------------------
    Processing Record 175 of 501 | marawi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=marawi
    -----------------------------
    Processing Record 176 of 501 | kafr sawm http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kafr sawm
    -----------------------------
    Processing Record 177 of 501 | bambanglipuro http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bambanglipuro
    -----------------------------
    Processing Record 178 of 501 | saint-ambroise http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saint-ambroise
    -----------------------------
    Processing Record 179 of 501 | svetlaya http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=svetlaya
    -----------------------------
    Processing Record 180 of 501 | kirakira http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kirakira
    -----------------------------
    Processing Record 181 of 501 | whitehorse http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=whitehorse
    -----------------------------
    Processing Record 182 of 501 | skibbereen http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=skibbereen
    -----------------------------
    Processing Record 183 of 501 | mount gambier http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mount gambier
    -----------------------------
    Processing Record 184 of 501 | sao filipe http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sao filipe
    -----------------------------
    Processing Record 185 of 501 | pemba http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pemba
    -----------------------------
    Processing Record 186 of 501 | vrangel http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vrangel
    -----------------------------
    Processing Record 187 of 501 | douentza http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=douentza
    -----------------------------
    Processing Record 188 of 501 | lebu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lebu
    -----------------------------
    Processing Record 189 of 501 | victoria http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=victoria
    -----------------------------
    Processing Record 190 of 501 | yuci http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=yuci
    -----------------------------
    Processing Record 191 of 501 | vieux-habitants http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vieux-habitants
    -----------------------------
    Processing Record 192 of 501 | panalingaan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=panalingaan
    -----------------------------
    Processing Record 193 of 501 | san patricio http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=san patricio
    -----------------------------
    Processing Record 194 of 501 | baherden http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=baherden
    -----------------------------
    Processing Record 195 of 501 | kyshtovka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kyshtovka
    -----------------------------
    Processing Record 196 of 501 | lapy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lapy
    -----------------------------
    Processing Record 197 of 501 | vestmannaeyjar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vestmannaeyjar
    -----------------------------
    Processing Record 198 of 501 | narsaq http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=narsaq
    -----------------------------
    Processing Record 199 of 501 | saldanha http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saldanha
    -----------------------------
    Processing Record 200 of 501 | normal http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=normal
    -----------------------------
    Processing Record 201 of 501 | gizo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=gizo
    -----------------------------
    Processing Record 202 of 501 | beira http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=beira
    -----------------------------
    Processing Record 203 of 501 | waipawa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=waipawa
    -----------------------------
    Processing Record 204 of 501 | monteiro http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=monteiro
    -----------------------------
    Processing Record 205 of 501 | chapleau http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=chapleau
    -----------------------------
    Processing Record 206 of 501 | mackay http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mackay
    -----------------------------
    Processing Record 207 of 501 | adre http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=adre
    -----------------------------
    Processing Record 208 of 501 | khalkhal http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=khalkhal
    -----------------------------
    Processing Record 209 of 501 | provideniya http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=provideniya
    -----------------------------
    Processing Record 210 of 501 | ampanihy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ampanihy
    -----------------------------
    Processing Record 211 of 501 | praia da vitoria http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=praia da vitoria
    -----------------------------
    Processing Record 212 of 501 | brigantine http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=brigantine
    -----------------------------
    Processing Record 213 of 501 | faanui http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=faanui
    -----------------------------
    Processing Record 214 of 501 | waingapu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=waingapu
    -----------------------------
    Processing Record 215 of 501 | college http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=college
    -----------------------------
    Processing Record 216 of 501 | goundam http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=goundam
    -----------------------------
    Processing Record 217 of 501 | mitsamiouli http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mitsamiouli
    -----------------------------
    Processing Record 218 of 501 | puerto ayora http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=puerto ayora
    -----------------------------
    Processing Record 219 of 501 | nikki http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nikki
    -----------------------------
    Processing Record 220 of 501 | samarai http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=samarai
    -----------------------------
    Processing Record 221 of 501 | biloela http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=biloela
    -----------------------------
    Processing Record 222 of 501 | san angelo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=san angelo
    -----------------------------
    Processing Record 223 of 501 | balikpapan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=balikpapan
    -----------------------------
    Processing Record 224 of 501 | peru http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=peru
    -----------------------------
    Processing Record 225 of 501 | sao joao da barra http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sao joao da barra
    -----------------------------
    Processing Record 226 of 501 | luangwa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=luangwa
    -----------------------------
    Processing Record 227 of 501 | itaituba http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=itaituba
    -----------------------------
    Processing Record 228 of 501 | loralai http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=loralai
    -----------------------------
    Processing Record 229 of 501 | kysyl-syr http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kysyl-syr
    -----------------------------
    Processing Record 230 of 501 | polis http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=polis
    -----------------------------
    Processing Record 231 of 501 | port hardy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=port hardy
    -----------------------------
    Processing Record 232 of 501 | tanete http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tanete
    -----------------------------
    Processing Record 233 of 501 | airai http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=airai
    -----------------------------
    Processing Record 234 of 501 | kalininsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kalininsk
    -----------------------------
    Processing Record 235 of 501 | berlevag http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=berlevag
    -----------------------------
    Processing Record 236 of 501 | omsukchan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=omsukchan
    -----------------------------
    Processing Record 237 of 501 | tuatapere http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tuatapere
    -----------------------------
    Processing Record 238 of 501 | viedma http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=viedma
    -----------------------------
    Processing Record 239 of 501 | la paz http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=la paz
    -----------------------------
    Processing Record 240 of 501 | quatre cocos http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=quatre cocos
    -----------------------------
    Processing Record 241 of 501 | pavlogradka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pavlogradka
    -----------------------------
    Processing Record 242 of 501 | beyneu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=beyneu
    -----------------------------
    Processing Record 243 of 501 | cidreira http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cidreira
    -----------------------------
    Processing Record 244 of 501 | mortka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mortka
    -----------------------------
    Processing Record 245 of 501 | lavrentiya http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lavrentiya
    -----------------------------
    Processing Record 246 of 501 | camabatela http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=camabatela
    -----------------------------
    Processing Record 247 of 501 | inta http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=inta
    -----------------------------
    Processing Record 248 of 501 | san jose http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=san jose
    -----------------------------
    Processing Record 249 of 501 | hervey bay http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hervey bay
    -----------------------------
    Processing Record 250 of 501 | dunedin http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=dunedin
    -----------------------------
    Processing Record 251 of 501 | mahebourg http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mahebourg
    -----------------------------
    Processing Record 252 of 501 | kabansk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kabansk
    -----------------------------
    Processing Record 253 of 501 | presidencia roque saenz pena http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=presidencia roque saenz pena
    -----------------------------
    Processing Record 254 of 501 | lagoa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lagoa
    -----------------------------
    Processing Record 255 of 501 | coruripe http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=coruripe
    -----------------------------
    Processing Record 256 of 501 | puerto del rosario http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=puerto del rosario
    -----------------------------
    Processing Record 257 of 501 | maxixe http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=maxixe
    -----------------------------
    Processing Record 258 of 501 | labuhan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=labuhan
    -----------------------------
    Processing Record 259 of 501 | la primavera http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=la primavera
    -----------------------------
    Processing Record 260 of 501 | phek http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=phek
    -----------------------------
    Processing Record 261 of 501 | ibra http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ibra
    -----------------------------
    Processing Record 262 of 501 | gwadar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=gwadar
    -----------------------------
    Processing Record 263 of 501 | miri http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=miri
    -----------------------------
    Processing Record 264 of 501 | richards bay http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=richards bay
    -----------------------------
    Processing Record 265 of 501 | santa maria da vitoria http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=santa maria da vitoria
    -----------------------------
    Processing Record 266 of 501 | tiksi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tiksi
    -----------------------------
    Processing Record 267 of 501 | ostrovnoy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ostrovnoy
    -----------------------------
    Processing Record 268 of 501 | ukiah http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ukiah
    -----------------------------
    Processing Record 269 of 501 | saint andrews http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saint andrews
    -----------------------------
    Processing Record 270 of 501 | sarangani http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sarangani
    -----------------------------
    Processing Record 271 of 501 | saquena http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saquena
    -----------------------------
    Processing Record 272 of 501 | tazovskiy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tazovskiy
    -----------------------------
    Processing Record 273 of 501 | carmelo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=carmelo
    -----------------------------
    Processing Record 274 of 501 | vostok http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vostok
    -----------------------------
    Processing Record 275 of 501 | nhulunbuy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nhulunbuy
    -----------------------------
    Processing Record 276 of 501 | ossora http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ossora
    -----------------------------
    Processing Record 277 of 501 | launceston http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=launceston
    -----------------------------
    Processing Record 278 of 501 | biak http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=biak
    -----------------------------
    Processing Record 279 of 501 | sao gabriel da cachoeira http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sao gabriel da cachoeira
    -----------------------------
    Processing Record 280 of 501 | geraldton http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=geraldton
    -----------------------------
    Processing Record 281 of 501 | hirado http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hirado
    -----------------------------
    Processing Record 282 of 501 | silvia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=silvia
    -----------------------------
    Processing Record 283 of 501 | kitgum http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kitgum
    -----------------------------
    Processing Record 284 of 501 | baruun-urt http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=baruun-urt
    -----------------------------
    Processing Record 285 of 501 | nizhneangarsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nizhneangarsk
    -----------------------------
    Processing Record 286 of 501 | hamilton http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hamilton
    -----------------------------
    Processing Record 287 of 501 | ilulissat http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ilulissat
    -----------------------------
    Processing Record 288 of 501 | sterling http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sterling
    -----------------------------
    Processing Record 289 of 501 | radcliff http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=radcliff
    -----------------------------
    Processing Record 290 of 501 | sisimiut http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sisimiut
    -----------------------------
    Processing Record 291 of 501 | vanimo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vanimo
    -----------------------------
    Processing Record 292 of 501 | tecoanapa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tecoanapa
    -----------------------------
    Processing Record 293 of 501 | najran http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=najran
    -----------------------------
    Processing Record 294 of 501 | pio ix http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pio ix
    -----------------------------
    Processing Record 295 of 501 | salalah http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=salalah
    -----------------------------
    Processing Record 296 of 501 | oriximina http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=oriximina
    -----------------------------
    Processing Record 297 of 501 | nabire http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nabire
    -----------------------------
    Processing Record 298 of 501 | christchurch http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=christchurch
    -----------------------------
    Processing Record 299 of 501 | de-kastri http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=de-kastri
    -----------------------------
    Processing Record 300 of 501 | homer http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=homer
    -----------------------------
    Processing Record 301 of 501 | sikonge http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sikonge
    -----------------------------
    Processing Record 302 of 501 | codrington http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=codrington
    -----------------------------
    Processing Record 303 of 501 | gallup http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=gallup
    -----------------------------
    Processing Record 304 of 501 | along http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=along
    -----------------------------
    Processing Record 305 of 501 | marzuq http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=marzuq
    -----------------------------
    Processing Record 306 of 501 | birjand http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=birjand
    -----------------------------
    Processing Record 307 of 501 | farah http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=farah
    -----------------------------
    Processing Record 308 of 501 | coffs harbour http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=coffs harbour
    -----------------------------
    Processing Record 309 of 501 | mimongo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mimongo
    -----------------------------
    Processing Record 310 of 501 | arlit http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=arlit
    -----------------------------
    Processing Record 311 of 501 | mae chan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mae chan
    -----------------------------
    Processing Record 312 of 501 | karratha http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=karratha
    -----------------------------
    Processing Record 313 of 501 | naze http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=naze
    -----------------------------
    Processing Record 314 of 501 | prabumulih http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=prabumulih
    -----------------------------
    Processing Record 315 of 501 | luderitz http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=luderitz
    -----------------------------
    Processing Record 316 of 501 | mantua http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mantua
    -----------------------------
    Processing Record 317 of 501 | kaputa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kaputa
    -----------------------------
    Processing Record 318 of 501 | torbay http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=torbay
    -----------------------------
    Processing Record 319 of 501 | alihe http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=alihe
    -----------------------------
    Processing Record 320 of 501 | burnie http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=burnie
    -----------------------------
    Processing Record 321 of 501 | barcelos http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=barcelos
    -----------------------------
    Processing Record 322 of 501 | shelburne http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=shelburne
    -----------------------------
    Processing Record 323 of 501 | weston http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=weston
    -----------------------------
    Processing Record 324 of 501 | bethel http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bethel
    -----------------------------
    Processing Record 325 of 501 | tuktoyaktuk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tuktoyaktuk
    -----------------------------
    Processing Record 326 of 501 | ouadda http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ouadda
    -----------------------------
    Processing Record 327 of 501 | divicani http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=divicani
    -----------------------------
    Processing Record 328 of 501 | kilindoni http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kilindoni
    -----------------------------
    Processing Record 329 of 501 | saint-pierre http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saint-pierre
    -----------------------------
    Processing Record 330 of 501 | tilichiki http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tilichiki
    -----------------------------
    Processing Record 331 of 501 | guerrero negro http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=guerrero negro
    -----------------------------
    Processing Record 332 of 501 | eureka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=eureka
    -----------------------------
    Processing Record 333 of 501 | cabo san lucas http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=cabo san lucas
    -----------------------------
    Processing Record 334 of 501 | san quintin http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=san quintin
    -----------------------------
    Processing Record 335 of 501 | joensuu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=joensuu
    -----------------------------
    Processing Record 336 of 501 | bull savanna http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bull savanna
    -----------------------------
    Processing Record 337 of 501 | lodwar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lodwar
    -----------------------------
    Processing Record 338 of 501 | half moon bay http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=half moon bay
    -----------------------------
    Processing Record 339 of 501 | mutoko http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mutoko
    -----------------------------
    Processing Record 340 of 501 | yablonovo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=yablonovo
    -----------------------------
    Processing Record 341 of 501 | sobolevo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sobolevo
    -----------------------------
    Processing Record 342 of 501 | san cristobal http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=san cristobal
    -----------------------------
    Processing Record 343 of 501 | shimoda http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=shimoda
    -----------------------------
    Processing Record 344 of 501 | sao paulo de olivenca http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sao paulo de olivenca
    -----------------------------
    Processing Record 345 of 501 | la rioja http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=la rioja
    -----------------------------
    Processing Record 346 of 501 | ulladulla http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ulladulla
    -----------------------------
    Processing Record 347 of 501 | da lat http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=da lat
    -----------------------------
    Processing Record 348 of 501 | sao geraldo do araguaia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sao geraldo do araguaia
    -----------------------------
    Processing Record 349 of 501 | jacareacanga http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=jacareacanga
    -----------------------------
    Processing Record 350 of 501 | alofi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=alofi
    -----------------------------
    Processing Record 351 of 501 | bhag http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bhag
    -----------------------------
    Processing Record 352 of 501 | te anau http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=te anau
    -----------------------------
    Processing Record 353 of 501 | srednekolymsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=srednekolymsk
    -----------------------------
    Processing Record 354 of 501 | beringovskiy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=beringovskiy
    -----------------------------
    Processing Record 355 of 501 | vao http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vao
    -----------------------------
    Processing Record 356 of 501 | goldsboro http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=goldsboro
    -----------------------------
    Processing Record 357 of 501 | vardo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vardo
    -----------------------------
    Processing Record 358 of 501 | omboue http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=omboue
    -----------------------------
    Processing Record 359 of 501 | ketchikan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ketchikan
    -----------------------------
    Processing Record 360 of 501 | rajshahi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rajshahi
    -----------------------------
    Processing Record 361 of 501 | eyl http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=eyl
    -----------------------------
    Processing Record 362 of 501 | klaksvik http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=klaksvik
    -----------------------------
    Processing Record 363 of 501 | smolenka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=smolenka
    -----------------------------
    Processing Record 364 of 501 | komsomolskiy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=komsomolskiy
    -----------------------------
    Processing Record 365 of 501 | westport http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=westport
    -----------------------------
    Processing Record 366 of 501 | swan river http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=swan river
    -----------------------------
    Processing Record 367 of 501 | japura http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=japura
    -----------------------------
    Processing Record 368 of 501 | yaransk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=yaransk
    -----------------------------
    Processing Record 369 of 501 | kavieng http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kavieng
    -----------------------------
    Processing Record 370 of 501 | bejar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bejar
    -----------------------------
    Processing Record 371 of 501 | lata http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lata
    -----------------------------
    Processing Record 372 of 501 | abong mbang http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=abong mbang
    -----------------------------
    Processing Record 373 of 501 | sitka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sitka
    -----------------------------
    Processing Record 374 of 501 | shache http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=shache
    -----------------------------
    Processing Record 375 of 501 | pandan niog http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pandan niog
    -----------------------------
    Processing Record 376 of 501 | wonthaggi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=wonthaggi
    -----------------------------
    Processing Record 377 of 501 | ha tinh http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ha tinh
    -----------------------------
    Processing Record 378 of 501 | zapolyarnyy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=zapolyarnyy
    -----------------------------
    Processing Record 379 of 501 | bloemhof http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bloemhof
    -----------------------------
    Processing Record 380 of 501 | bandarbeyla http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bandarbeyla
    -----------------------------
    Processing Record 381 of 501 | vilyuysk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vilyuysk
    -----------------------------
    Processing Record 382 of 501 | aksha http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=aksha
    -----------------------------
    Processing Record 383 of 501 | spas-demensk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=spas-demensk
    -----------------------------
    Processing Record 384 of 501 | gumdag http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=gumdag
    -----------------------------
    Processing Record 385 of 501 | marathon http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=marathon
    -----------------------------
    Processing Record 386 of 501 | shancheng http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=shancheng
    -----------------------------
    Processing Record 387 of 501 | avera http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=avera
    -----------------------------
    Processing Record 388 of 501 | coihaique http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=coihaique
    -----------------------------
    Processing Record 389 of 501 | bambous virieux http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bambous virieux
    -----------------------------
    Processing Record 390 of 501 | dhuburi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=dhuburi
    -----------------------------
    Processing Record 391 of 501 | hovd http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hovd
    -----------------------------
    Processing Record 392 of 501 | kenai http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kenai
    -----------------------------
    Processing Record 393 of 501 | port macquarie http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=port macquarie
    -----------------------------
    Processing Record 394 of 501 | izhma http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=izhma
    -----------------------------
    Processing Record 395 of 501 | chapais http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=chapais
    -----------------------------
    Processing Record 396 of 501 | lorengau http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lorengau
    -----------------------------
    Processing Record 397 of 501 | tupaciguara http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tupaciguara
    -----------------------------
    Processing Record 398 of 501 | togur http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=togur
    -----------------------------
    Processing Record 399 of 501 | alice springs http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=alice springs
    -----------------------------
    Processing Record 400 of 501 | mahon http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mahon
    -----------------------------
    Processing Record 401 of 501 | valadares http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=valadares
    -----------------------------
    Processing Record 402 of 501 | tynda http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tynda
    -----------------------------
    Processing Record 403 of 501 | garissa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=garissa
    -----------------------------
    Processing Record 404 of 501 | angoche http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=angoche
    -----------------------------
    Processing Record 405 of 501 | monrovia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=monrovia
    -----------------------------
    Processing Record 406 of 501 | moron http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=moron
    -----------------------------
    Processing Record 407 of 501 | wahpeton http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=wahpeton
    -----------------------------
    Processing Record 408 of 501 | nyimba http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nyimba
    -----------------------------
    Processing Record 409 of 501 | kutum http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kutum
    -----------------------------
    Processing Record 410 of 501 | kingston http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kingston
    -----------------------------
    Processing Record 411 of 501 | fort wellington http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=fort wellington
    -----------------------------
    Processing Record 412 of 501 | davila http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=davila
    -----------------------------
    Processing Record 413 of 501 | rio gallegos http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rio gallegos
    -----------------------------
    Processing Record 414 of 501 | veraval http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=veraval
    -----------------------------
    Processing Record 415 of 501 | ingham http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ingham
    -----------------------------
    Processing Record 416 of 501 | pihuamo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pihuamo
    -----------------------------
    Processing Record 417 of 501 | bud http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bud
    -----------------------------
    Processing Record 418 of 501 | pringsewu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pringsewu
    -----------------------------
    Processing Record 419 of 501 | huarmey http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=huarmey
    -----------------------------
    Processing Record 420 of 501 | high prairie http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=high prairie
    -----------------------------
    Processing Record 421 of 501 | catalina http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=catalina
    -----------------------------
    Processing Record 422 of 501 | mount isa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mount isa
    -----------------------------
    Processing Record 423 of 501 | yulara http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=yulara
    -----------------------------
    Processing Record 424 of 501 | caucaia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=caucaia
    -----------------------------
    Processing Record 425 of 501 | kargil http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kargil
    -----------------------------
    Processing Record 426 of 501 | sinnamary http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sinnamary
    -----------------------------
    Processing Record 427 of 501 | marsh harbour http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=marsh harbour
    -----------------------------
    Processing Record 428 of 501 | seoul http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=seoul
    -----------------------------
    Processing Record 429 of 501 | aflao http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=aflao
    -----------------------------
    Processing Record 430 of 501 | grand gaube http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=grand gaube
    -----------------------------
    Processing Record 431 of 501 | acucena http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=acucena
    -----------------------------
    Processing Record 432 of 501 | rolla http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rolla
    -----------------------------
    Processing Record 433 of 501 | kalmunai http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kalmunai
    -----------------------------
    Processing Record 434 of 501 | nalbari http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nalbari
    -----------------------------
    Processing Record 435 of 501 | aklavik http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=aklavik
    -----------------------------
    Processing Record 436 of 501 | shujaabad http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=shujaabad
    -----------------------------
    Processing Record 437 of 501 | shagonar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=shagonar
    -----------------------------
    Processing Record 438 of 501 | itarema http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=itarema
    -----------------------------
    Processing Record 439 of 501 | rauma http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rauma
    -----------------------------
    Processing Record 440 of 501 | darab http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=darab
    -----------------------------
    Processing Record 441 of 501 | tezu http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tezu
    -----------------------------
    Processing Record 442 of 501 | kamina http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kamina
    -----------------------------
    Processing Record 443 of 501 | jumla http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=jumla
    -----------------------------
    Processing Record 444 of 501 | tomatlan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tomatlan
    -----------------------------
    Processing Record 445 of 501 | muros http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=muros
    -----------------------------
    Processing Record 446 of 501 | tirumullaivasal http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tirumullaivasal
    -----------------------------
    Processing Record 447 of 501 | kokuy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kokuy
    -----------------------------
    Processing Record 448 of 501 | bubaque http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bubaque
    -----------------------------
    Processing Record 449 of 501 | coquimbo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=coquimbo
    -----------------------------
    Processing Record 450 of 501 | ures http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=ures
    -----------------------------
    Processing Record 451 of 501 | hobyo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hobyo
    -----------------------------
    Processing Record 452 of 501 | novaya igirma http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=novaya igirma
    -----------------------------
    Processing Record 453 of 501 | nefteyugansk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nefteyugansk
    -----------------------------
    Processing Record 454 of 501 | bojnurd http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=bojnurd
    -----------------------------
    Processing Record 455 of 501 | okhotsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=okhotsk
    -----------------------------
    Processing Record 456 of 501 | pacific grove http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=pacific grove
    -----------------------------
    Processing Record 457 of 501 | antsirabe http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=antsirabe
    -----------------------------
    Processing Record 458 of 501 | koshurnikovo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=koshurnikovo
    -----------------------------
    Processing Record 459 of 501 | morant bay http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=morant bay
    -----------------------------
    Processing Record 460 of 501 | uvira http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=uvira
    -----------------------------
    Processing Record 461 of 501 | tateyama http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tateyama
    -----------------------------
    Processing Record 462 of 501 | villa de san antonio http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=villa de san antonio
    -----------------------------
    Processing Record 463 of 501 | mehamn http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mehamn
    -----------------------------
    Processing Record 464 of 501 | alexandria http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=alexandria
    -----------------------------
    Processing Record 465 of 501 | hella http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=hella
    -----------------------------
    Processing Record 466 of 501 | mangrol http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mangrol
    -----------------------------
    Processing Record 467 of 501 | iquique http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=iquique
    -----------------------------
    Processing Record 468 of 501 | nevel http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nevel
    -----------------------------
    Processing Record 469 of 501 | vila http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vila
    -----------------------------
    Processing Record 470 of 501 | yelan-kolenovskiy http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=yelan-kolenovskiy
    -----------------------------
    Processing Record 471 of 501 | padang http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=padang
    -----------------------------
    Processing Record 472 of 501 | vievis http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=vievis
    -----------------------------
    Processing Record 473 of 501 | evensk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=evensk
    -----------------------------
    Processing Record 474 of 501 | mweka http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mweka
    -----------------------------
    Processing Record 475 of 501 | port lincoln http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=port lincoln
    -----------------------------
    Processing Record 476 of 501 | shelui http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=shelui
    -----------------------------
    Processing Record 477 of 501 | nizhnevartovsk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=nizhnevartovsk
    -----------------------------
    Processing Record 478 of 501 | formosa http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=formosa
    -----------------------------
    Processing Record 479 of 501 | darnah http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=darnah
    -----------------------------
    Processing Record 480 of 501 | saint pete beach http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=saint pete beach
    -----------------------------
    Processing Record 481 of 501 | peniche http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=peniche
    -----------------------------
    Processing Record 482 of 501 | san juan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=san juan
    -----------------------------
    Processing Record 483 of 501 | tommot http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=tommot
    -----------------------------
    Processing Record 484 of 501 | rassvet http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rassvet
    -----------------------------
    Processing Record 485 of 501 | talnakh http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=talnakh
    -----------------------------
    Processing Record 486 of 501 | kidal http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=kidal
    -----------------------------
    Processing Record 487 of 501 | grindavik http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=grindavik
    -----------------------------
    Processing Record 488 of 501 | leshukonskoye http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=leshukonskoye
    -----------------------------
    Processing Record 489 of 501 | santa luzia http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=santa luzia
    -----------------------------
    Processing Record 490 of 501 | lujan http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lujan
    -----------------------------
    Processing Record 491 of 501 | lodja http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=lodja
    -----------------------------
    Processing Record 492 of 501 | abu dhabi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=abu dhabi
    -----------------------------
    Processing Record 493 of 501 | riachao das neves http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=riachao das neves
    -----------------------------
    Processing Record 494 of 501 | sangar http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=sangar
    -----------------------------
    Processing Record 495 of 501 | srikakulam http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=srikakulam
    -----------------------------
    Processing Record 496 of 501 | mizan teferi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=mizan teferi
    -----------------------------
    Processing Record 497 of 501 | malinyi http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=malinyi
    -----------------------------
    Processing Record 498 of 501 | aykhal http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=aykhal
    -----------------------------
    Processing Record 499 of 501 | puerto leguizamo http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=puerto leguizamo
    -----------------------------
    Processing Record 500 of 501 | zhigansk http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=zhigansk
    -----------------------------
    Processing Record 501 of 501 | rantauprapat http://api.openweathermap.org/data/2.5/weather?appid=ff31044259f1be250728e2f69466884d&units=imperial&q=rantauprapat



```python
# Check to Ensure Data was Recieved 
print(f'City: {len(cities)}')
print(f'Cloudiness: {len(cloud)}')
print(f'Humidity: {len(hum)}')
print(f'Lat: {len(lat)}')
print(f'Temperature: {len(temp)}')
print(f'Wind Speed:{len(wind)}')
```

    City: 501
    Cloudiness: 501
    Humidity: 501
    Lat: 501
    Temperature: 501
    Wind Speed:501



```python
# Create Dictionary and Data Frame to Build the Charts 
weather_dict = {
    "city": list(cities),
    "temp": temp,
    "lat": lat,
    "hum":hum,
    "cloud":cloud,
    "wind":wind    
}
weather_data = pd.DataFrame(weather_dict)

# Write to CSV
weather_data.to_csv("weather.csv", encoding="utf-8", index=False)

#Output Cities
weather_data.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>city</th>
      <th>cloud</th>
      <th>hum</th>
      <th>lat</th>
      <th>temp</th>
      <th>wind</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>lodja</td>
      <td>32</td>
      <td>100</td>
      <td>-34.58</td>
      <td>57.20</td>
      <td>10.29</td>
    </tr>
    <tr>
      <th>1</th>
      <td>tirumullaivasal</td>
      <td>0</td>
      <td>100</td>
      <td>42.34</td>
      <td>33.64</td>
      <td>3.38</td>
    </tr>
    <tr>
      <th>2</th>
      <td>sarangani</td>
      <td>0</td>
      <td>70</td>
      <td>60.05</td>
      <td>30.40</td>
      <td>2.26</td>
    </tr>
    <tr>
      <th>3</th>
      <td>beyneu</td>
      <td>8</td>
      <td>91</td>
      <td>-34.42</td>
      <td>43.72</td>
      <td>2.59</td>
    </tr>
    <tr>
      <th>4</th>
      <td>ilulissat</td>
      <td>0</td>
      <td>83</td>
      <td>41.28</td>
      <td>41.11</td>
      <td>2.59</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Build a Scatter Plot for Latitude and Temperature
plt.scatter(weather_data["lat"], weather_data["temp"], marker="o")

# Incorporate the Other Graph Properties
plt.title("City Latitude vs. Max Temperature (4/20/18)")
plt.ylabel("Temperature (Fahrenheit)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the Figure
plt.savefig("TemperatureInWorldCities.png")

# Show Plot
plt.show()
```


![png](output_6_0.png)



```python
# Build a Scatter Plot for Humidity and Temperature
plt.scatter(weather_data["lat"], weather_data["hum"], marker="o")

# Incorporate the Other Graph Properties
plt.title("City Latitude vs. Humidity (4/20/18)")
plt.ylabel("Humidity (%)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the Figure
plt.savefig("HumidityInWorldCities.png")

# Show Plot
plt.show()
```


![png](output_7_0.png)



```python
# Build a Scatter Plot for Cloudiness and Temperature
plt.scatter(weather_data["lat"], weather_data["cloud"], marker="o")

# Incorporate the Other Graph Properties
plt.title("City Latitude vs. Cloudiness (4/20/18)")
plt.ylabel("Cloudiness (%)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the Figure
plt.savefig("CloudinessInWorldCities.png")

# Show Plot
plt.show()
```


![png](output_8_0.png)



```python
# Build a Scatter Plot for Wind Speed and Temperature
plt.scatter(weather_data["lat"], weather_data["wind"], marker="o")

# Incorporate the Other Graph Properties
plt.title("City Latitude vs. Wind Speed (4/20/18)")
plt.ylabel("Wind Speed (mph)")
plt.xlabel("Latitude")
plt.grid(True)

# Save the Figure
plt.savefig("WindInWorldCities.png")

# Show Plot
plt.show()
```


![png](output_9_0.png)

