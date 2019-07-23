![alt text][logo]

[logo]: https://findicons.com/files/icons/1035/human_o2/128/system_help.png "Question icon"

## Questions

#### 1. How long did you spend on the coding test?

3 days

_What would you add to your solution if you had more time?_

- Add a designated page (with endpoint) for a selected restaurant that would show more details. Details would include location on the map.
- Show which countries are available.
- On application load, make an API call to get full list of cities and store it in Redux. When user would type, a dropdown would display cities from that list (similar to google search suggestions).
- Organize and structure components more effectively.
- Move most of the logic to Selectors.
- Update UI to follow one design pattern (colors, font types and sizes, effects etc)
- Add unit tests

#### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- Usage of SCSS in React without having to install task runners (Gulp) or add additional code.
- Selectors from **reselect** library to avoid frequent re-rendering. I haven't used them in this project yet, it is part of the next release.

#### 3. How would you track down a performance issue in production? Have you ever had to do this?

I haven't done this. But if I had to, I would go to **Network** tab in Chrome dev tools, check how much time it takes for each service to load and try to optimize it.
Optimization may include reducing of images' sizes, removing unnecessary HTTP requests, limit usage of heavy dependencies.
I would give preference to Functional components over Class components.

#### 4. How would you improve the API that you just used?

- I would add user friendly error messages in response body so that I would not need to write them on the client side.

#### 5. Please describe yourself using JSON.

```{
    "name": {
        "title": "Mr",
        "first": "Eugene",
        "last": "Costov"
    },
    "gender": "male",
    "residence": {
        "street": "30 Beech Avenue",
        "city": "Toronto",
        "state": "ON",
        "country": "CA",
        "postcode": "M4E 3H2",
        "coordinates": {
            "latitude": "43.671406",
            "longitude": "-79.287503"
        }
    },
    "email": "eugene.costov@gmail.com",
    "dob": {
        "date": "1985-06-11",
        "age": 33
    },
    "countryOfBirth": "MD",
    "phone": "Samsung",
    "occupation": ["Web Developer", "Software Development Consultant"],
    "hobbies": [{
            "name": "Football",
            "duration": "25 years",
            "skill": "Decent",
            "frequency": {
                "number": 2,
                "format": "Weekly"
            }
        },
        {
            "name": "Pizza",
            "duration": "30 years",
            "skill": "Excellent",
            "frequency": {
                "number": 3,
                "format": "Weekly"
            }
        },
        {
            "name": "Guitar",
            "duration": "15 years",
            "skill": "Good",
            "frequency": {
                "number": 5,
                "format": "Monthly"
            }
        }
    ],
    "oneLineDescription": "I'm modest, but hard working and I consistently set firm goals for myself"
}
```
