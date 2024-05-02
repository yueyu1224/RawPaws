# RawPaws

## Project Description
RawPaws is an interactive web application designed for pet owners who are interested in or already feeding their pets a raw food diet.  This application serves as a platform to manage pet profiles, calculate appropriate raw food quantities, and participate in a community forum.

## Key Features
* User Authentication: Simple login functionality using alphanumeric usernames.
* Pet Profile Management: Users can create and manage profiles for their pets, including details like pet's name, pet's type, and pet's breed.
* Raw Food Info: Provide educational content on raw food diets, benefits, risks, and transition methods. Include FAQs
* Community Forum: A platform for users to discuss topics related to raw food diets for pets, share experiences, and ask questions. Replies in the forum are associated with the logged-in user's username. All forum replies are visible to every user, regardless of who posted them.
* Raw Food Calculator: An interactive tool to calculate the recommended amount of raw food based on the pet’s profile.
* Session and Cookie Management: Persistent user sessions using UUID-based session IDs and cookies to retain pet profiles and forum activity across login sessions.

## Running the Application
The project will run with `npm install`, `npm run build`, `npm start`

## Usage Guide
* Login: Enter a alphanumeric username to log in.
    - If the username is "dog", a 403 status is returned with an error message "auth-insufficient".
    - Non-alphanumeric usernames return a 400 status with "invalid-username".
    - Unauthenticated users attempting to access restricted areas receive a 401 status.
* Creating Pet Profiles: Once logged in, it will navigate to the 'Pet Profiles' section to add or edit your pet profile.
* Participating in the Community Forum: Visit the forum section to read discussions or contribute by adding your replies. Replies are tied to your session-based user identity. Every user can see all posts, enhancing the community experience.
* Using the Raw Food Calculator: Access the calculator through the navigation menu to determine the appropriate food quantities for your pet.
* Persistent Data:
    - User data, pet profiles, and forum contributions persist across sessions due to robust session and cookie management. Each user session is uniquely identified, ensuring data is saved and retrieved correctly.
    - Users can see their saved pet profiles when they logout and login back. The replies on forum are visible to every user.


