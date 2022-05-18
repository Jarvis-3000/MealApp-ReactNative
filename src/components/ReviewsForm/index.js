import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import { AirbnbRating } from "react-native-ratings";
import { TextInput, Button, HelperText } from "react-native-paper";
//
import reviewFormValidation from "./reviewFormValidation";

function FormView({ values, errors, handleSubmit, handleChange, touched }) {
  return (
    <View style={styles.fieldsContainer}>
      <View style={{ alignItems: "flex-start" }}>
        <Text
          style={{ paddingHorizontal: 5, marginVertical: 10, fontSize: 20 }}
        >
          Please rate the recipe
        </Text>
        <AirbnbRating
          showRating={false}
          defaultRating={values.rating}
          size={30}
          onFinishRating={(val) => handleChange("rating", val)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <TextInput
          label="Comment"
          multiline
          onChangeText={handleChange("comment")}
          numberOfLines={5}
          value={values.comment}
          mode="outlined"
          error={touched.comment && errors.comment}
        />
        {touched.comment && errors.comment && (
          <HelperText type="error" visible={true}>
            {errors.comment}
          </HelperText>
        )}
      </View>
      {/*  */}
      <Button mode="contained" style={{ marginTop: 30 }} onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
}

function ReviewsForm({ style }) {
  const initialValues = {
    comment: "",
    rating: 0,
  };

  return (
    <Formik
      style={[styles.container, { ...style }]}
      component={FormView}
      initialValues={initialValues}
      validate={reviewFormValidation}
      onSubmit={(values) => {
        console.log("ok");
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  fieldsContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ReviewsForm;
