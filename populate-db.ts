import { FormsModule } from '@angular/forms';
import { Constants } from './src/app/shared/constants';
import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";


console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);
console.log("in populate=" + Constants.PAINVEGETARIEN);

const Pain_VégétariensRef = database().ref(Constants.PAINVEGETARIEN);
const Pain_VolaillesRef = database().ref(Constants.PAINVOLAILLE);
const Pain_ViandesRef = database().ref(Constants.PAINVIANDE);
const Pain_PoissonsRef = database().ref(Constants.PAINPOISSON);

const Pains_garnis_optionsRef = database().ref(Constants.PAINGARNISOPTIONS);
const Pains_garnis_requiredRef = database().ref(Constants.PAINGARNISREQUIREMENTS);

const dessertsRef = database().ref(Constants.DESSERTS);
const saladesRef = database().ref(Constants.SALADES);
const spécialitésRef = database().ref(Constants.SPECIALITES);
const Plats_du_jourRef = database().ref(Constants.PLATDUJOUR);
const Petites_entrées_avec_potagesRef = database().ref(Constants.PETITEENTREE);
const FormulesRef = database().ref(Constants.FORMULES);



dbData.desserts.forEach( dessert => {

  console.log('adding dessert', dessert.name);

  const dessertRef = dessertsRef.push({
      name: dessert.name,
      description: dessert.description,
      iconUrl: dessert.iconUrl,
      prize: dessert.prize,
      type: dessert.type
  });
});


dbData.Pains_garnis_required.forEach( garnis => {

  console.log('adding garnis', garnis.name);

  const garnisRef = Pains_garnis_requiredRef.push({
      name: garnis.name,
  });
});


  dbData.salades.forEach( salade => {

  console.log('adding salade', salade.name);

  const saladeRef = saladesRef.push({
      name: salade.name,
      description: salade.description,
      iconUrl: salade.iconUrl,
      prize: salade.prize,
      type: salade.type
  });
});
dbData.spécialités.forEach( spécialité => {
  console.log('adding spécialité', spécialité.name);

  const spécialitéRef = spécialitésRef.push({
      name: spécialité.name,
      description: spécialité.description,
      iconUrl: spécialité.iconUrl,
      prize: spécialité.prize,
      type: spécialité.type
  });
});
  dbData.Pains_garnis_options.forEach( pain_garnis_option => {

  console.log('adding pain_garnis_option', pain_garnis_option.name);

  const pain_garnis_optionRef = Pains_garnis_optionsRef.push({
      name: pain_garnis_option.name,
    });
});

dbData.Pain_Végétariens.forEach( Pain_Végétarien => {
  console.log('adding Pain_Végétarien', Pain_Végétarien.name);

  const Pain_VégétarienRef = Pain_VégétariensRef.push({
      name: Pain_Végétarien.name,
      description: Pain_Végétarien.description,
      prize_small: Pain_Végétarien.prize_small,
      prize_large: Pain_Végétarien.prize_large,
      type: Pain_Végétarien.type
  });
});
  dbData.Pain_Volailles.forEach( Pain_Volaille => {
  console.log('adding Pain_Volaille', Pain_Volaille.name);

  const Pain_VolailleRef = Pain_VolaillesRef.push({
      name: Pain_Volaille.name,
      description: Pain_Volaille.description,
      prize_small: Pain_Volaille.prize_small,
      prize_large: Pain_Volaille.prize_large,
      type: Pain_Volaille.type
  });
});
dbData.Pain_Viandes.forEach( Pain_Viande => {
  console.log('adding Pain_Viande', Pain_Viande.name);

  const Pain_ViandeRef = Pain_ViandesRef.push({
      name: Pain_Viande.name,
      description: Pain_Viande.description,
      prize_small: Pain_Viande.prize_small,
      prize_large: Pain_Viande.prize_large,
      type: Pain_Viande.type
  });
});
dbData.Pain_Poissons.forEach( Pain_Poisson => {
  console.log('adding Pain_Poisson', Pain_Poisson.name);

  const Pain_PoissonRef = Pain_PoissonsRef.push({
      name: Pain_Poisson.name,
      description: Pain_Poisson.description,
      prize_small: Pain_Poisson.prize_small,
      prize_large: Pain_Poisson.prize_large,
      type: Pain_Poisson.type
  });
});
dbData.Plat_du_jour.forEach( Plat_du_jour => {
  console.log('adding Plat_du_jour', Plat_du_jour.name);
  const Plat_du_jourRef = Plats_du_jourRef.push({
      name: Plat_du_jour.name,
      prize: Plat_du_jour.prize,
      type: Plat_du_jour.type
    });
});
dbData.Petites_entrées_avec_potages.forEach( petites_entrée => {
  console.log('adding Petites_entrées_avec_potages', petites_entrée.name);
  const petites_entréeRef = Petites_entrées_avec_potagesRef.push({
      name: petites_entrée.name,
      prize: petites_entrée.prize,
      type: petites_entrée.type
    });
});
dbData.Formules.forEach( Formule => {
  console.log('adding Formule', Formule.name);
  const FormuleRef = FormulesRef.push({
      name: Formule.name,
      prize: Formule.prize,
      type: Formule.type
    });
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


