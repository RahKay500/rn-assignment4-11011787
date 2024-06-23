This project consists of four React Native components; Login, HomeScreen, JobsCard, PopularCard.
Below is a detailed explanation of each component and their functionality.


LogIn
The Login Component is used for user authentication and logging in. It allows you to get acccess to the Jobizz app.

Usage: 
1. Provides input fields for name and email.
2. Validates user input and triggers login through a button press.
3. Offers options to log in using social media accounts (Apple, Google, Facebook).

HOMESCREEN
The HomeScreen component represents the main screen of the Jobizz app where featured and popular job listings are displayed. It includes sections for featured jobs and popular jobs, along with user profile information and search functionality.

Usage:
1. Displays a header with user information (name, email).
2. Shows a search bar to search for specific jobs.
3. Features a horizontal list of featured jobs using FlatList and JobsCard component.
4. Displays a section of popular jobs using FlatList and PopularCard component.


POPULARCARD
The PopularCard component displays multiple job listings in a vertical card format. Each card includes details like job title, company name, salary, and location. It's used within the HomeScreen to render popular job listings.

Usage:
1. Accepts props for an array of popularJobs.
2. Maps through the popularJobs array to render individual job cards.
3. Supports interaction through onPress functionality.


JOBSCARD
The JobsCard component represents a card displaying details of a job listing, including title, company, salary, and location. It's used within the HomeScreen to render each featured job listing.

Usage:
1. Accepts props such as title, company, salary, location, image, and backgroundColor.
2. Provides a styled card layout for displaying job details.
3. Supports interaction through onPress functionality.

SCREENSHOTS
<img src="jobizzLogin.jpg" width="200"/>
<img src="homeScreen1.jpg" width="200"/>
<img src="homeScreen2.jpg" width="200"/>
<img src="homeScreen3.jpg" width="200"/>
<img src="homeScreen4.jpg" width="200"/>
<img src="homeScreen5.jpg" width="200"/>
<img src="homeScreen6.jpg" width="200"/>
<img src="homeScreen7.jpg" width="200"/>
<img src="homeScreen8.jpg" width="200"/>

