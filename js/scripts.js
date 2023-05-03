// Data structure containing all exercise data displayed on the webpage
const EXERCISES = {
    exercise_1: {
        id: "exercise_1",
        name: "Push ups",
        description: "Hand-carved traditional Maori style bone Koru pendant",
        muscle_group: "Chest, triceps",
        stars: 1,
        image: "assets/img/push_ups.webp"
    }, exercise_2: {
        id: "exercise_2",
        name: "Pull ups",
        description: "Wide pull-ups is a perfect calisthenics exercise for getting a wide back. The key characteristic of this exercise is your grip and the width of this on a pull-up bar.",
        muscle_group: "Back, biceps, forearms",
        stars: 5,
        image: "assets/img/pull_ups.webp"
    }, exercise_3: {
        id: "exercise_3",
        name: "Ring Flies",
        description: "Vintage prominent Maori Tekoteko warrior figure",
        muscle_group: "Chest",
        stars: 4,
        image: "assets/img/ring_fly.jpg"
    }, exercise_4: {
        id: "exercise_4",
        name: "Dips",
        description: "This fine Maori work is a handcrafted piece of brassware considered highly attractive and artistic",
        muscle_group: "Chest, triceps",
        stars: 2,
        image: "assets/img/dips2.jpeg"
    }, exercise_5: {
        id: "exercise_5",
        name: "Decline Pushups",
        description: "Approximately 15 to 17 Abalone 15x25 mm beads on a 15-inch strand",
        muscle_group: "Chest, triceps",
        stars: 3,
        image: "assets/img/decline_pushups.jpg"
    }, exercise_6: {
        id: "exercise_6",
        name: "One arm pull-ups",
        description: "To do one arm pull-ups, simply start by grabbing the pull-up bar with both arms and then let one arm go.",
        muscle_group: "Back, biceps, forearms",
        stars: 3,
        image: "assets/img/one_arm_pull_up.jpeg"
    }, exercise_7: {
        id: "exercise_7",
        name: "Bodyweight row with rings",
        description: "Doing bodyweight rows with rings is an exercise that can help you build your lat muscles and upper back. ",
        muscle_group: "Back, biceps",
        stars: 1,
        image: "assets/img/rows.jpeg"
    }, exercise_8: {
        id: "exercise_8",
        name: "Sitting rows with resistance band",
        description: "A sitting or seated row is an exercise that can be done by making use of resistance bands. Start by sitting on the floor with your legs straight and clamp one end of the resistance band under the soles of your feet. Then, make sure you grab the other end of the band with your hands (underhand grip) and pull the resistance band towards your belly. Hold briefly and return to the starting position in a controlled manner.",
        muscle_group: "Back, biceps",
        stars: 5,
        image: "assets/img/sitting_rows.jpeg"
    }, exercise_9: {
        id: "exercise_9",
        name: "Squats",
        description: "Squat involves shifting your hips back and 'sitting' toward the ground while in a standing position, stopping once your thighs are parallel with the ground, then pushing through the heels to straighten your legs and return to standing.",
        muscle_group: "Legs (Quadriceps)",
        stars: 4,
        image: "assets/img/squats.jpg"
    }, exercise_10: {
        id: "exercise_10",
        name: "Leg Raises",
        description: "To do a leg raise, find a pull-up bar from which you can hang from. Once you are ready to start, keep both legs together and raise them at a 45 degree angle, i.e. make an L. Lower them back down and repeat.",
        muscle_group: "Abs",
        stars: 2,
        image: "assets/img/leg_raises.webp"
    }, exercise_11: {
        id: "exercise_11",
        name: "Muscle-ups",
        description: "Get on the bar by hanging from it and start lifting your upper-body to place it on top of the bar. To achieve this it is essential to lean a bit forward in order to be able to swing yourself up properly. This calisthenics exercise requires much training to perfect, thus it can be a great candidate to include in your regular workouts.",
        muscle_group: "Back, biceps, forearms",
        stars: 3,
        image: "assets/img/muscle_ups.webp"
    }, exercise_12: {
        id: "exercise_12",
        name: "Pistol Squats",
        description: "To do a pistol squat, simply stand up a with arms to your sides, then lift both arms in front of you (zombie-like), and slightly lift one leg up. Then, squat using the other leg by making sure that your arms remain straight and that the leg you lifted is now fully stretched.",
        muscle_group: "Legs (Quadriceps, Harmstrings)",
        stars: 3,
        image: "assets/img/pistol_squats.jpeg"
    }, exercise_13: {
        id: "exercise_13",
        name: "Walking lunges",
        description: "Walking lunges are a variation on the static lunge exercise. Instead of standing back upright after performing a lunge on one leg, as you would in a static bodyweight lunge, you “walk” forward by lunging out with the other leg.",
        muscle_group: "Legs (Quadriceps, Harmstrings)",
        stars: 2,
        image: "assets/img/lunges.webp"
    }, exercise_14: {
        id: "exercise_14",
        name: "Abs Plank",
        description: "The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.",
        muscle_group: "Abs",
        stars: 3,
        image: "assets/img/plank.jpeg"
    }, exercise_15: {
        id: "exercise_15",
        name: "Jumping Jacks",
        description: "Begin by standing with your legs straight and your arms to your sides. Jump up and spread your feet beyond hip-width apart while bringing your arms above your head, nearly touching. Jump again, lowering your arms and bringing your legs together. Return to your starting position.",
        muscle_group: "Full body",
        stars: 3,
        image: "assets/img/jumping_jack.webp"
    }, exercise_16: {
        id: "exercise_16",
        name: "Chin-ups",
        description: "Chin Up is an exercise in which one hangs by the hands from a support (such as a horizontal bar) and pulls oneself up until the chin is level with the support. Such an exercise done with the palms facing inward (a pull up is done with the palms facing outward). Most upper body exercises will help with chin-ups.",
        muscle_group: "Back, biceps, forearms",
        stars: 3,
        image: "assets/img/chin-ups.jpeg"
    }, exercise_17: {
        id: "exercise_17",
        name: "Reverse crunch",
        description: "What are reverse crunches? It's essentially the opposite movement of a standard crunch. In a reverse crunch, you lift your knees up toward your chest, instead of lifting your shoulders and neck off the floor toward your knees",
        muscle_group: "Abs",
        stars: 3,
        image: "assets/img/reverse_crunch.jpeg"
    }, exercise_18: {
        id: "exercise_18",
        name: "Pike Push-ups",
        description: "Start in a push-up position with your arms straight and hands shoulder-width apart. Lift your hips in the air and create an upside-down V shape. From here bend your elbows and lower the top of your head to the ground. Just as you would perform a push-up. Push your body back up until your arms are straight. If this is easy for you, you can try handstand push-ups.",
        muscle_group: "Shoulders, triceps",
        stars: 3,
        image: "assets/img/pike_push-ups.jpeg"
    }, exercise_19: {
        id: "exercise_19",
        name: "Handstand Push-ups",
        description: "The handstand push-ups is an advanced push-up variation that involves standing upside down on your hands and engaging your arms, shoulders, and core muscles to lift your body.",
        muscle_group: "Shoulders, triceps",
        stars: 3,
        image: "assets/img/handstand_push-ups.webp"
    }, exercise_20: {
        id: "exercise_20",
        name: "Bear Crawls",
        description: "A Bear Crawl is a bodyweight mobility exercise that uses strength in the shoulders, quads and abdominal muscles. It requires you to bear the weight on your hands and toes. A bear crawl is an excellent exercise in core control and focused breathing.",
        muscle_group: "Shoulders, quadriceps, abs",
        stars: 3,
        image: "assets/img/bear_crawls.webp"
    }, exercise_21: {
        id: "exercise_21",
        name: "Biceps curl",
        description: "To do a biceps curl with a dumbbell, hold a dumbbell with your palm facing upward. Slowly curl the weight up by bending your elbow, keeping your elbow close to your body. Then slowly lower the weight to the starting position. You'll feel tension in the muscles in the front of your upper arm.",
        muscle_group: "Biceps",
        stars: 3,
        image: "assets/img/biceps_curl.png"
    }, exercise_22: {
        id: "exercise_22",
        name: "Hammer curl",
        description: "The hammer curl changes the grip position on the dumbbell to target both your biceps and your brachialis, a nearby muscle important for strong arms.",
        muscle_group: "Biceps, brachialis",
        stars: 3,
        image: "assets/img/hummer.webp"
    }, exercise_23: {
        id: "exercise_23",
        name: "Diamond Push-Up",
        description: "Start in a high plank with your palms flat, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and your core and glutes engaged. Walk your hands together so that your thumbs and forefingers form a triangle.",
        muscle_group: "Triceps, chest",
        stars: 3,
        image: "assets/img/diamond.jpeg"
    }, exercise_24: {
        id: "exercise_24",
        name: "Banded Overhead Triceps Extension",
        description: "Stand with your feet close together holding down a resistance band. Hold an end of the band in each hand behind your head, with the band running behind your body. Your elbows should remain close to your ears, your palms facing each other, and the knuckles on both hands touching. This is starting position. Without moving your upper arms, straighten your elbows and extend your arms directly overhead. Try not to let your elbows flare out. Keep your shoulders down and your core tight",
        muscle_group: "Triceps",
        stars: 3,
        image: "assets/img/overhead_triceps.png"
    }, exercise_25: {
        id: "exercise_25",
        name: "Bent-Over Dumbbell Triceps Kickback",
        description: "Bend your knees forward and hinge forward at the hips, keeping your core tight and back flat. Hold your arms at your sides with a dumbbell in each hand, palms facing each other. Bend at the elbows until your forearms are parallel to the ground, keeping your elbows tight by your rib cage. Kick the weights back to completely straighten your arms.",
        muscle_group: "Triceps",
        stars: 3,
        image: "assets/img/triceps_kickback.jpeg"
    }       
};

/**
   Generates the HTML for displaying one exercise given its id in the
   EXERCISES object. This function follows a clone-find-update approach:
   1. CLONE an HTML element to use as a template
   2. FIND the elements using selectors
   3. UPDATE the elements to customize their content

   @param    {number} exerciseId An identifier in the EXERCISES object to display

   @returns  {string} A string with the HTML of the exercise.
*/
function getExerciseHTML(exerciseId) {
    // Obtain exercise data from the EXERCISES object
    const exercise = EXERCISES[exerciseId];

    // CLONE an HTML element to use as a template
    const exerciseHTML = $("#exercise-template").clone();

    // Delete id to avoid duplicates
    exerciseHTML.prop('id', '');

    // FIND and UPDATE the exercise's name
    exerciseHTML.find(".exercise-name").text(exercise.name);
    exerciseHTML.find(".exercise-muscle_group").text(exercise.muscle_group);

    // FIND and UPDATE the exercise's image properties
    exerciseHTML.find("img").
        prop("src", exercise.image).
        prop("alt", exercise.name);

    // Customize the exercise's reviews    
    const starHTML = exerciseHTML.find(".exercise-reviews").find("div");
    for (let starsCounter = 2; starsCounter <= exercise.stars; starsCounter++) {
        const newStartHTML = starHTML.clone();
        exerciseHTML.find(".exercise-reviews").append(newStartHTML);
    }

    // Remove .d-none to make the exercise visible
    exerciseHTML.removeClass("d-none");

    return exerciseHTML;
}

/**
    Show all exercises in the application's homepage

    @returns  No value.
*/
function showExercises(exercises) {
    // Traverse the exercises object
    for (let exerciseId in exercises) {
        const exercise = exercises[exerciseId];

        // Generate each exercise's HTML
        const exerciseHTML = getExerciseHTML(exercise.id);
        $('#exercises').append(exerciseHTML);
    }
}

function search(){
    // Create a new search results object (will be empty in the beginning)

    // Search over the EXERCISES object for a given user's query
    // Match user's query against exercise's name and description

    const results = [];
    const query = $('#searchQuery').val().toLowerCase().trim();
    console.log(query);

    for(const exerciseId in EXERCISES){
        const exercise = EXERCISES[exerciseId];

        if(exercise.name.toLowerCase().includes(query) || exercise.muscle_group.toLowerCase().includes(query)){
            results.push(exercise);
        }
    }

    $('#exercises').empty();
    showExercises(results)
}

$('#searchQuery').on('keyup', search);

showExercises(EXERCISES);