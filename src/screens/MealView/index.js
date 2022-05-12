import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Image } from "react-native";
import { ActivityIndicator, Button, Title, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import YoutubeVideo from "../../components/YoutubeVideo";

import { fetchMeal } from "../../redux/Meal/actions";

export default function MealView({ route, navigation }) {
  const dispatch = useDispatch();
  const { mealTitle } = route.params;
  const { fetchState, data: mealState } = useSelector(
    (state) => state.meal.meal
  );
  console.log({ mealState });
  const { strMealThumb: imageSrc, strYoutube: youtubeLink } = mealState;

  useEffect(() => {
    dispatch(fetchMeal(mealTitle));
  }, []);

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Title>{mealTitle}</Title>
      {fetchState === 1 ? (
        <ActivityIndicator animating={true} />
      ) : (
        <View>
          {youtubeLink ? (
            <YoutubeVideo link={youtubeLink} />
          ) : (
            <Image
              source={{
                uri: imageSrc,
                width: "100%",
                height: 300,
              }}
            />
          )}
          <Button
            onPress={() => {
              console.log("okkkk");
              navigation.navigate("MealCategories");
            }}
          >
            Go Back
          </Button>
        </View>
      )}
    </View>
  );
}

// import {fetchMeal} from "../../redux/Meal/actions"

// function MealView() {
//   // const { mealTitle } = router.params;
//   // console.log("okkkkkkk");
//   // const dispatch = useDispatch()
//   // const mealState = useSelector(state=>state.meal.mealState)

//   // useEffect(()=>{
//   //     dispatch(fetchMeal(mealTitle))
//   // },[])

//   // useEffect(()=>{
//   //     console.log({mealState})
//   // },[mealState])

//   return (
//     <View>
//       <Title>Hello</Title>

//       {/* <ScrollView>
//         <View>
//           {videoPlay ? <Video /> : <Image source={require(imageSrc)} />}
//         </View>
//         <View>
//             <View>
//                 <FlatList
//                     data={ingredients}
//                     renderItem={({item})=>{IngredientsListView()}}
//                     keyExtractor={(item,index)=>index}
//                 />
//             </View>
//         </View>
//       </ScrollView> */}
//     </View>
//   );
// }

// export default MealView // ToDo
`
Header [back, share, like]

Title

//scrollview 
    Thumbnail [video play button which triggers video to play]

    Ingredients
    Recipe
    Nutrition Info

    Reviews
`;
