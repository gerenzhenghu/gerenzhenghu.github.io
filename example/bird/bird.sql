# Host: localhost  (Version: 5.5.53)
# Date: 2019-02-25 21:29:53
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('0001','Sparkle耀眼','项链',4200,1612,'199','img/big3.jpg','img/big1.jpg','18K金钻石挂坠(不含链子)','白18K金','主钻1颗  0.19克拉    辅钻10颗  0.03克拉','img/small4.jpg','img/big16.jpg','img/30854_312.jpg','','','','','',''),('0002','拥暖(吊坠)','项链',3200,3555,'87','img/big5.jpg','img/big6.jpg','18K金钻石挂坠(不含链子)','白18K金','主钻1颗  0.18克拉         辅钻8颗  0.05克拉','','img/30854_312.jpg','img/26345_313.jpg','','','','','',''),('0003','小鹿斑比','项链',810,4912,'62','img/middle7.jpg','img/middle7.jpg','','','','','','','','','','','',''),('0004','Focus焦点','项链',4200,588,'72','img/big8.jpg','img/middle.jpg','','','','','','','','','','','',''),('0005','小萌象','耳钉',970,265,'28','img/big9.jpg','img/big10.jpg','','','','','','','','','','','',''),('0006','花蓉','耳钉',1890,487,'13','img/big11.jpg','img/big12.jpg','','','','','','','','','','','',''),('0007','倾慕恋','手链',3480,488,'18','img/big13.jpg','img/big14.jpg','','','','','','','','','','','',''),('0008','淋浴屏','项链',2380,50,'112','img/big3.jpg','img/big2jpg','','','','','','','','','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(11) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('13564789564','0002',6);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `myphone` char(11) NOT NULL,
  `password` varchar(16) NOT NULL,
  PRIMARY KEY (`myphone`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('13564789564','123456'),('13647859644','123456'),('14785478961','123456'),('14785478963','123456'),('14785478966','123456'),('14789564235','123456'),('17896245614','123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
