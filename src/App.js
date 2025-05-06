import React from "react";

const workouts = {
  "Leg Day": {
    "Leg Extensions": ["2 sets × 15 reps", "2 sets × 12 reps"],
    "Leg Press": ["1 set × 12 reps", "1 set × 10 reps", "3 sets × 6 reps"],
    "Leg Curls": ["2 sets × 15 reps", "1 set × 12 reps"],
    "Hack Squat": ["4 sets × 10 reps"],
    "Calf Raises": ["2 sets × 15 reps", "2 sets × 12 reps"],
  },
  "Chest and Back": {
    "Pull-ups": ["3 sets × 12 reps"],
    "Dumbbell Bench Press": ["2 sets × 12 reps", "2 sets × 10 reps"],
    Rows: ["2 sets × 12 reps", "2 sets × 10 reps"],
    "Assisted Bench Press": ["2 sets × 12 reps", "2 sets × 10 reps"],
    "Lat Pulldown Machine": ["3 sets × 10 reps"],
    "Dumbbell Flys": ["4 sets × 10 reps"],
    "Lat Pulldown": ["3 sets × 12 reps"],
  },
};

export default function WorkoutApp() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Workout Plan</h1>
      {Object.entries(workouts).map(([day, exercises]) => (
        <div key={day} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{day}</h2>
          {Object.entries(exercises).map(([exercise, sets]) => (
            <div key={exercise} className="mb-3">
              <h3 className="text-xl font-medium">{exercise}</h3>
              <ul className="list-disc list-inside ml-4">
                {sets.map((set, index) => (
                  <li key={index}>{set}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
