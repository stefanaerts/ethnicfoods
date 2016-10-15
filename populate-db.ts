import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";


console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);


const dessertsRef = database().ref('desserts');
const saladesRef = database().ref('salades');
const spécialitésRef = database().ref('spécialités');
const Pains_garnis_optionsRef = database().ref('Pains_garnis_options');
const Pains_garnis_typesRef = database().ref('Pains_garnis_types');
const Pain_VégétariensRef = database().ref('Pain_Végétariens');
const Pain_VolaillesRef = database().ref('Pain_Volailles');
const Pain_ViandesRef = database().ref('Pain_Viandes');
const Pain_PoissonsRef = database().ref('Pain_Poissons');
const Plats_du_jourRef = database().ref('Plat_du_jour');
const Petites_entrées_avec_potagesRef = database().ref('Petites_entrées_&_potages');
const FormulesRef = database().ref('Formules');
const Pains_garnis_requiredRef = database().ref('Pains_garnis_required');



// const lessonsRef = database().ref('lessons');

dbData.Pains_garnis_required.forEach( garnis => {

  console.log('adding garnis', garnis.name);

  const garnisRef = Pains_garnis_requiredRef.push({
      name: garnis.name,
  });
});

/*dbData.desserts.forEach( dessert => {

  console.log('adding dessert', dessert.name);

  const dessertRef = dessertsRef.push({
      name: dessert.name,
      description: dessert.description,
      iconUrl: dessert.iconUrl,
      prize: dessert.prize
  });
});
  dbData.salades.forEach( salade => {

  console.log('adding salade', salade.name);

  const saladeRef = saladesRef.push({
      name: salade.name,
      description: salade.description,
      iconUrl: salade.iconUrl,
      prize: salade.prize
  });
});
dbData.spécialités.forEach( spécialité => {
  console.log('adding spécialité', spécialité.name);

  const spécialitéRef = spécialitésRef.push({
      name: spécialité.name,
      description: spécialité.description,
      iconUrl: spécialité.iconUrl,
      prize: spécialité.prize
  });
});
  dbData.Pains_garnis_options.forEach( pain_garnis_option => {

  console.log('adding pain_garnis_option', pain_garnis_option.name);

  const pain_garnis_optionRef = Pains_garnis_optionsRef.push({
      name: pain_garnis_option.name,
    });
});
dbData.Pains_garnis_types.forEach( pain_garnis_type => {
  console.log('adding pain_garnis_type', pain_garnis_type.name);
  const pain_garnis_typeRef = Pains_garnis_typesRef.push({
      name: pain_garnis_type.name,
    });
});
dbData.Pain_Végétariens.forEach( Pain_Végétarien => {
  console.log('adding Pain_Végétarien', Pain_Végétarien.name);

  const Pain_VégétarienRef = Pain_VégétariensRef.push({
      name: Pain_Végétarien.name,
      description: Pain_Végétarien.description,
      prize_demi: Pain_Végétarien.prize_demi,
      prize_entier: Pain_Végétarien.prize_entier
  });
});
  dbData.Pain_Volailles.forEach( Pain_Volaille => {
  console.log('adding Pain_Volaille', Pain_Volaille.name);

  const Pain_VolailleRef = Pain_VolaillesRef.push({
      name: Pain_Volaille.name,
      description: Pain_Volaille.description,
      prize_demi: Pain_Volaille.prize_demi,
      prize_entier: Pain_Volaille.prize_entier
  });
});
dbData.Pain_Viandes.forEach( Pain_Viande => {
  console.log('adding Pain_Viande', Pain_Viande.name);

  const Pain_ViandeRef = Pain_ViandesRef.push({
      name: Pain_Viande.name,
      description: Pain_Viande.description,
      prize_demi: Pain_Viande.prize_demi,
      prize_entier: Pain_Viande.prize_entier
  });
});
dbData.Pain_Poissons.forEach( Pain_Poisson => {
  console.log('adding Pain_Poisson', Pain_Poisson.name);

  const Pain_PoissonRef = Pain_PoissonsRef.push({
      name: Pain_Poisson.name,
      description: Pain_Poisson.description,
      prize_demi: Pain_Poisson.prize_demi,
      prize_entier: Pain_Poisson.prize_entier
  });
});
dbData.Plat_du_jour.forEach( Plat_du_jour => {
  console.log('adding Plat_du_jour', Plat_du_jour.name);
  const Plat_du_jourRef = Plats_du_jourRef.push({
      name: Plat_du_jour.name,
      prize: Plat_du_jour.prize
    });
});
dbData.Petites_entrées_avec_potages.forEach( petites_entrée => {
  console.log('adding Petites_entrées_avec_potages', petites_entrée.name);
  const petites_entréeRef = Petites_entrées_avec_potagesRef.push({
      name: petites_entrée.name,
      prize: petites_entrée.prize
    });
});
dbData.Formules.forEach( Formule => {
  console.log('adding Formule', Formule.name);
  const FormuleRef = FormulesRef.push({
      name: Formule.name,
      prize: Formule.prize
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


