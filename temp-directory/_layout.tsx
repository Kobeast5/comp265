import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="assignment-1" options={{ title: "Assignment 1" }} />
      <Tabs.Screen name="exercise-1" options={{ title: "Exercise 1" }} />
    </Tabs>
  );
}