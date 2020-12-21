CREATE DATABASE tour_agency;

CREATE TABLE clients 
(
    cid SERIAL PRIMARY KEY,
    cname VARCHAR(64) NOT NULL,
    clogin VARCHAR(64) NOT NULL,
    cpassword VARCHAR(64) NOT NULL,
    crole INTEGER NOT NULL,
    cpassportseries VARCHAR(64) NOT NULL,
    cpassportnumber INTEGER NOT NULL,
    cpassportdateofissue DATE NOT NULL,
    cpassportdateofexpiry DATE NOT NULL,
    cphone VARCHAR(64) NOT NULL,
    cbirthdate DATE NOT NULL,
    caddress VARCHAR(64) NOT NULL
);

CREATE TABLE managers 
(
    mid SERIAL PRIMARY KEY,
    mname VARCHAR(64) NOT NULL,
    mlogin VARCHAR(64) NOT NULL,
    mpassword VARCHAR(64) NOT NULL,
    mrole INTEGER NOT NULL,
    mphone VARCHAR(64) NOT NULL,
    mbirthdate DATE NOT NULL,
    maddress VARCHAR(64) NOT NULL,
    mschedule VARCHAR(64) NOT NULL
);

CREATE TABLE tour_operators 
(
    toid SERIAL PRIMARY KEY,
    toname VARCHAR(64) NOT NULL,
    tophone VARCHAR(64) NOT NULL,
    toaddress VARCHAR(64) NOT NULL,
    toemail VARCHAR(64) NOT NULL
);

CREATE TABLE transport 
(
    trid SERIAL PRIMARY KEY,
    trname VARCHAR(64) NOT NULL
);

CREATE TABLE flights
(
    fid SERIAL PRIMARY KEY,
    fname VARCHAR(64) NOT NULL,
    fseats INTEGER NOT NULL,
    fdateofdeparture DATE NOT NULL,
    fpointofdeparture VARCHAR(64) NOT NULL,
    fpointofarrival VARCHAR(64) NOT NULL,
    ftrid INTEGER NOT NULL REFERENCES transport (trid)
);

CREATE TABLE tour_types 
(
    ttid SERIAL PRIMARY KEY,
    ttname VARCHAR(64) NOT NULL
);

CREATE TABLE tours 
(
	tid SERIAL PRIMARY KEY,
	ttype VARCHAR(64) NOT NULL,
	tcountry VARCHAR(64) NOT NULL,
	tresort VARCHAR(64) NOT NULL,
	thotel VARCHAR(64) NOT NULL,
	ttouroperator VARCHAR(64) NOT NULL,
	tvisa BOOLEAN NOT NULL,
	tinsurance BOOLEAN NOT NULL,
	tfood BOOLEAN NOT NULL,
	tprice INTEGER NOT NULL,
	ttoid INTEGER NOT NULL REFERENCES tour_operators (toid),
	tttid INTEGER NOT NULL REFERENCES tour_types (ttid)
);

CREATE TABLE reservations 
(
    rid SERIAL PRIMARY KEY,
    rstatus VARCHAR(64) NOT NULL,
    rmanager VARCHAR(64) NOT NULL,
    rclient VARCHAR(64) NOT NULL,
    rdateofcreation DATE NOT NULL,
    rduration INTEGER NOT NULL,
    rprice INTEGER NOT NULL,
    rmid INTEGER NOT NULL REFERENCES managers (mid),
    rcid INTEGER NOT NULL REFERENCES clients (cid) ON DELETE CASCADE,
    rfid INTEGER NOT NULL REFERENCES flights (fid) ON DELETE CASCADE,
    rtid INTEGER NOT NULL REFERENCES tours (tid)
);

INSERT INTO clients (cname, clogin, cpassword, crole, cpassportseries, cpassportnumber, cpassportdateofissue, cpassportdateofexpiry, cphone, cbirthdate, caddress) VALUES
('Earlie Fleeman', 'efleeman0', 'odYZhs', 0, 'IL', 4740269, '2014/08/12', '2023/08/17', '236-890-6012', '1969/12/22', '520 Moulton Park'),
('Christyna Tinto', 'ctinto1', 'obqoFRjJB0', 0, 'ZW', 4860104, '2014/09/14', '2023/07/01', '765-768-3837', '1986/03/17', '1085 Gateway Crossing'),
('Melvyn Sinkings', 'cpeltz3', 'd7hrUsgcv', 0, 'CN', 6251042, '2014/12/28', '2023/04/25', '575-559-2794', '1972/10/14', '9922 Granby Parkway'),
('Cybill Peltz', 'peltz31', 'odYZhs', 0, 'CN', 9482605, '2013/11/09', '2023/04/19', '258-388-4425', '1970/12/11', '64 Porter Point'),
('Cammy Rubury', 'crubury4', 'ZifNEYdCKy7', 0, 'ID', 5683024, '2012/06/29', '2022/06/30', '292-375-7078', '1989/05/16', '24250 Ryan Crossing'),
('Cash Schrader', 'cschrader5', 'S8mTZa03H3', 0, 'CN', 5107965, '2012/05/08', '2022/04/22', '255-977-1294', '1948/01/30', '11981 Ridgeway Road'),
('Giovanni Sedgeman', 'gsedgeman6', '0RYtJ3hxz', 0, 'CN', 9705812, '2014/04/24', '2024/04/24', '943-732-7385', '1963/02/04', '45471 Eliot Court'),
('Devi Leidecker', 'dleidecker7', 'hZ3YjRyuD', 0, 'AR', 1061889, '2014/03/19', '2023/07/26', '724-584-1566', '1966/08/14', '8 Fuller Road'),
('Seth Weth', 'sweth8', 'vtvjylwfTm', 0, 'AR', 4895753, '2014/06/16', '2024/06/16', '599-284-2059', '1956/10/02', '037 Milwaukee Center'),
('Lyndsie Vallantine', 'lvallantine9', 'LWpRmN', 0, 'JO', 2561616, '2012/11/16', '2022/02/17', '208-396-5706', '1942/07/07', '3434 Waxwing Street'),
('Ty Snalom', 'tsnaloma', 'Sm49z3w1', 0, 'MU', 4361875, '2013/04/08', '2022/02/28', '933-828-5733', '1980/03/03', '62477 Green Alley'),
('Westbrook Kersley', 'wkersleyb', 'Tzun96kTT', 0, 'UA', 2864754, '2013/12/30', '2023/11/19', '246-447-2517', '1961/12/21', '8220 West Alley'),
('Edwin Cartin', 'ecartinc', 'BfUeXfq', 0, 'SI', 4044231, '2012/03/31', '2022/01/17', '150-990-5248', '1945/12/28', '08219 Nevada Junction'),
('Hewitt Gurton', 'hgurtond', 'SXsOpF', 0, 'CZ', 4560665, '2015/01/03', '2025/01/02', '512-113-9332', '1952/11/17', '3971 East Hill'),
('Husain Cowton', 'hcowtone', '2gP7DP5sqp', 0, 'AL', 6812879, '2013/10/10', '2023/09/10"', '348-227-9423', '1978/11/09', '7 Kennedy Road');

INSERT INTO managers (mname, mlogin, mpassword, mrole, mphone, mbirthdate, maddress, mschedule) VALUES 
('Carlita Rafter', 'crafter0', 'k6oODqG7T7vI', 1, '497-440-4702', '1976/10/18', '25 Birzhevaya sqr., Off 3', '7:11 AM'),
('Brade Thomsen', 'bthomsen1', 'lrxHaT9RA7', 1, '138-560-7067', '1966/10/05', '25 Birzhevaya sqr., Off 3', '4:57 PM'),
('Jordan M''Barron', 'jmbarron2', 'tYxVt8yYw9', 1, '109-829-8077', '1975/09/25', '25 Birzhevaya sqr., Off 3', '9:50 PM'),
('Margret Muncey', 'mmuncey3', 'ofx4mwCchm', 1, '149-457-6452', '1973/09/07', '12 Krasnoyarskaya, Off 10', '6:15 AM'),
('Maddi Bartleman', 'mbartleman4', '5PSsZTBjc', 1, '755-407-2413', '1988/03/14', '12 Krasnoyarskaya, Off 10', '3:46 AM'),
('Gabbi Kehir', 'gkehir5', 'f51yXQSAV', 1, '226-562-2220', '1967/03/20', '12 Krasnoyarskaya, Off 10', '6:26 AM'),
('Emylee Shepley', 'eshepley6', 'WmZVuoy', 1, '960-389-2194', '1991/04/21', '59 Molodezhnaya, Apt 1', '3:15 PM'),
('Hernando Ickov', 'hickov7', 'M92qRul', 1, '644-874-3481', '1974/10/28', '59 Molodezhnaya, Apt 1', '6:13 PM'),
('Moll Gaitone', 'mgaitone8', 'xKSmEQVf5D', 1, '841-646-1793', '1993/07/17', '59 Molodezhnaya, Apt 1', '11:41 AM'),
('Elyn Delue', 'edelue9', 'lcUGWOxR', 1, '190-819-8120', '1990/06/18', '59 Molodezhnaya, Apt 1', '1:19 PM');

INSERT INTO tour_operators (toname, tophone, toaddress, toemail) VALUES
('TEZ Tour', '130-945-5393', '5036 Lukken Plaza', 'jzienkiewicz0@live.com'),
('Pegas', '978-105-5161', '7836 Nova Avenue', 'gsherbrooke1@woothemes.com'),
('Coral Travel', '163-252-0078', '57053 Corscot Drive', 'cpilgram2@github.io'),
('AML Travel', '379-969-9660', '521 Pepper Wood Hill', 'sthridgould3@discuz.net'),
('Acu Travel', '430-722-0751', '595 Becker Pass', 'njanson4@chronoengine.com'),
('Turistik', '893-408-4827', '63 Continental Trail', 'orouff5@tumblr.com'),
('Avalon Tour', '350-265-3682', '9 Morning Place', 'cwardle6@studiopress.com'),
('ANEX Tour', '623-383-7895', '65 Iowa Alley', 'msmidmore7@chron.com'),
('AeroBelServis', '324-981-5473', '93797 Grasskamp Plaza', 'thuddart8@bbb.org'),
('Eurotrips', '187-485-0845', '675 Aberg Point', 'vbrownfield9@merriam-webster.com');

INSERT INTO transport (trname) VALUES 
('Plane'),
('Train'),
('Bus'),
('Steamboat');

INSERT INTO flights (fname, fseats, fdateofdeparture, fpointofDeparture, fpointofarrival, ftrid) VALUES 
('Steamboat', 47, '2020/08/31', 'Vrachnaíika', 'Içara', 4),
('Plane', 31, '2020/07/20', 'Lyaskovets', 'Kota Kinabalu', 1),
('Bus', 137, '2020/07/22', 'George Town', 'Ranisoba', 3),
('Bus', 106, '2020/09/30', 'Güines', 'Wyszogród', 3),
('Train', 85, '2020/02/28', 'Eman', 'Gävle', 2),
('Plane', 142, '2020/07/08', 'Taibai', 'Starcevica', 1),
('Plane', 24, '2020/01/18', 'Kampong Chhnang', 'København', 1),
('Bus', 129, '2020/11/07', 'Khorugh', 'Buturlinovka', 3),
('Steamboat', 189, '2020/11/25', 'Desamparados', 'Sukowono', 4),
('Bus', 174, '2020/03/17', 'Eindhoven', 'Thị Trấn Na Hang', 3),
('Steamboat', 29, '2020/06/10', 'Rizal', 'Bečej', 4),
('Bus', 103, '2020/07/26', 'Shimanovsk', 'Dongsheng', 3),
('Bus', 110, '2020/01/04', 'Iwierzyce', 'Aucayacu', 3),
('Plane', 110, '2020/11/29', 'Simitli', 'Santiaoshi', 1),
('Bus', 46, '2020/04/21', 'Kafr az Zayyāt', 'Brescia', 3),
('Steamboat', 10, '2020/06/03', 'Åby', 'Damatulan', 4),
('Bus', 64, '2020/03/05', 'Shimen', 'Bałtów', 3),
('Steamboat', 117, '2020/05/17', 'Tarimbang', 'Palompon', 4),
('Plane', 191, '2020/10/20', 'Bayt Maqdūm', 'Xiahan', 1),
('Steamboat', 74, '2020/02/03', 'Xinning', 'Ilha de Moçambique', 4);

INSERT INTO tour_types (ttname) VALUES 
('Sights'),
('Ecotour'),
('Extreme'),
('Gastro'),
('Separate'),
('Wedding'),
('Cruise');

INSERT INTO tours (ttype, tcountry, tresort, thotel, ttouroperator, tvisa, tinsurance, tfood, tprice, ttoid, tttid) VALUES
('Gastro', 'Russia', 'Nytva', 'Cilegi', 'Pegas', false, true, false, 3409, 2, 4),
('Sights', 'Paraguay', 'Carayaó', 'Menanga', 'AML Travel', false, true, false, 1406, 4, 1),
('Separate', 'China', 'Yaozhanzi', 'Fencheng', 'TEZ Tour', false, false, true, 3986, 1, 5),
('Extreme', 'Nepal', 'Lahān', 'São Marcos', 'Pegas', true, true, false, 2138, 2, 3),
('Cruise', 'Brazil', 'Ijuí', 'Daoxian', 'Pegas', true, true, false, 3183, 2, 7),
('Extreme', 'Indonesia', 'Sangumata', 'Cartí Suitupo', 'Pegas', false, false, false, 2423, 2, 3),
('Gastro', 'Thailand', 'Bang Krathum', 'Bellavista', 'AML Travel', false, false, true, 4821, 4, 4),
('Ecotour', 'Poland', 'Żychlin', 'Al Quţayfah', 'TEZ Tour', false, false, true, 2814, 1, 2),
('Wedding', 'Sweden', 'Järfälla', 'Tartu', 'Coral Travel', true, false, false, 3210, 3, 6),
('Sights', 'Russia', 'Reutov', 'Trogan Barat', 'Pegas', true, true, false, 1663, 2, 1);

INSERT INTO reservations (rstatus, rmanager, rclient, rdateofcreation, rduration, rprice, rmid, rcid, rfid, rtid) VALUES 
('Active', 'Elyn Delue', 'Giovanni Sedgeman', '2004/03/20', 14, 1367, 10, 7, 10, 5),
('Active', 'Margret Muncey', 'Cammy Rubury', '2008/07/13', 15, 4402, 4, 5, 15, 7),
('Non-active', 'Emylee Shepley', 'Seth Weth', '2009/12/05', 21, 2839, 7, 9, 12, 3),
('Active', 'Moll Gaitone', 'Husain Cowton', '2004/03/06', 29, 1522, 9, 15, 17, 3),
('Active', 'Emylee Shepley', 'Westbrook Kersley', '2010/11/27', 12, 3282, 7, 12, 9, 6);