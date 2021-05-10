1. 查找 50 期红球出现次数
   select count(_) from (select _ from two_color_ball order by code desc limit 50) a where a.red1 = 2 or a.red2 = 2 or a.red3 = 2 or a.red4 = 2 or a.red5 = 2 or a.red6 = 2;
2. 最近一次出现期数
   select a.code from (select \* from two_color_ball order by code desc limit 50) a where a.red1 = 2 or a.red2 = 2 or a.red3 = 2 or a.red4 = 2 or a.red5 = 2 or a.red6 = 2 limit 1;

http://www.cwl.gov.cn/kjxx/ssq/kjgg/
