# VitalityVault
VitalitVaults is healthcare app which takes vitals of patients time to time and shows to doctors which then can diagonize constantly in one screen and predict verdict for patients
Since we are trying to archive high availability in our app therfore we have implemented docker and kubernetes so that our app is always available.
# Future goals.
Problem Statement:
In the era of microservices world, Every single request will go through umpteen numbers of systems in 
distributed environment for fulfillment. Predicting the cascading application failure in this environment 
is not easy and we don’t have industry standard solution to pro-actively find/predict the same readily 
available in open source world. 

Need solution for following 
1. Find cascading application failure ( any new service added in flow should automatically gets 
registered without any on-boarding or meta data config) 
Example if F is down, D & E won’t be fully operational in nature 
2. With telemetry data of compute, Can we find/predict optimal usage of compute and save the 
cost 
Example – Based on number of tx processed and CPU / RAM on given node, can we find the 
optimal usage of node and decommission the node which are either idle (or) processing the less 
request  
3. Identify the services which is often not performing as expected 
4. Visual representation would be an added advantage for viewing #1, #2 and #3 
