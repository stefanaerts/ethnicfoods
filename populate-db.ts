import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";


console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);


const dessertsRef = database().ref('desserts');
//const lessonsRef = database().ref('lessons');



dbData.desserts.forEach( dessert => {

  console.log('adding dessert', dessert.name);

  const dessertRef = dessertsRef.push({
      name: dessert.name,
      description: dessert.description,
      iconUrl: dessert.iconUrl,
  });

 /* let lessonKeysPerCourse = [];

  course.lessons.forEach((lesson:any) =>  {

    console.log('adding lesson ', lesson.url);

    lessonKeysPerCourse.push(lessonsRef.push({
        description: lesson.description,
        duration: lesson.duration,
        url: lesson.url,
        tags: lesson.tags,
        videoUrl: lesson.videoUrl || null,
        longDescription: lesson.longDescription,
        courseId: courseRef.key
      }).key);

  });


  const association = database().ref('lessonsPerCourse');

  const lessonsPerCourse = association.child(courseRef.key);

  lessonKeysPerCourse.forEach(lessonKey => {
    console.log('adding lesson to course ');

    const lessonCourseAssociation = lessonsPerCourse.child(lessonKey);

    lessonCourseAssociation.set(true);
  });
*/

});
