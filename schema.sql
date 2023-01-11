create table "Vizualization2" (
	"Year" int,
	"City" varchar not null,
	"Home_Team_Goals" int,
	"Away_Team_Goals" int,
	"Total_Goals" int
);



create table "Vizualization3" (
	"Winner" varchar not null,
	"Year" int not null,
	"GoalsScored" varchar not null
)


create table vizualization2 (
	year int,
	city varchar not null,
	home_team_goals int,
	away_team_goals int,
	total_goals int
);


create table vizualization3 (
	winner varchar not null,
	year int not null,
	goalsscored varchar not null
);


create table vizualization1 (
	stage varchar not null,
	year int,
	goalsscored int,
	home_team_name varchar,
	away_team_name varchar,
	attendance int,
	matchid varchar,
	stage_home_away_team varchar
);