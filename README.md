# Theme
The world is still mesmerized by world cup 2022! That was the motivation for this team to pick up soccer as the theme for this project. Intention was to create three visualizations through a website based on data that was found on Kaggle. There were three csv files altogether to manipulate and work with for creating desired website and dashboard.

# Data Wrangling
The team took following measures to get the data ready for next step: Creating a Python Flask-powered API with different routes, Creating HTML templates and CSS files, Creating a PostgreSQL database. Writing JavaScript for each visualization, Created dashboard page with multiple charts that update from same data. Used JavaScript library chart.JS.
Team decided to go with PostgreSQL of all the options available is because the data was stored in dataframes through jupyter notebook hence PostgreSQL deemed more appropriate in this situation. 

# Visualization 1

In the first visualization team wanted to showcase attendance to world cup matches based on years. Users can choose a year from the dropdown list and view top ten matches with highest attendance for that year. When a user comes to this website they are met with the following page:
![image](https://user-images.githubusercontent.com/112669805/213077059-4b4b263e-86ff-4918-bd38-db25b9fea846.png)



 
Once the user choses a year from the dropdown menu they will be taken to the following page. For example, let’s assume user chose the year 1930, they will be able to see top ten matches with most attendance for the year 1930:

![image](https://user-images.githubusercontent.com/112669805/213077077-a46f4eca-872e-4f79-b20e-8bb85e2b1b02.png)

 
# Visualization 2

On the 2nd part of the visualization, the team tried to demonstrate distribution of goals across cities through a heatmap.

![image](https://user-images.githubusercontent.com/112669805/213077127-abe31507-1474-4ba4-b91b-b4a89b1eb7cf.png)

 
Once user has chosen a specific year they will be taken to a heatmap of cities that have most goals for that year:

 ![image](https://user-images.githubusercontent.com/112669805/213077145-dffa05d4-337b-41b2-9b62-6a47661b82b2.png)


# Visualization 3

In this part team tried to create a visualization based on the winners of FIFA world cup from 1930 – 2014, Team also tried to demonstrate comparison between two countries chosen by the user based on following factors:
•	Winner
•	Year of winning
•	No.of goals

![image](https://user-images.githubusercontent.com/112669805/213077176-09460351-8292-4bcf-8c0a-29db04a35682.png)

 

# Conclusion

Overall, our intention was to showcase information with trends on soccer world cup matches over the years based on parameters that deemed necessary and if data was available. 

