import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
} from "react-native";
import { formatGarmentType } from "../util";

type ExpandableViewProps = {
  title: string;
  children: React.ReactNode;
};

const ExpandableView = (props: ExpandableViewProps) => {
  const [expanded, setExpanded] = useState(false);
  const { title, children } = props;

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    if (LayoutAnimation.configureNext) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <Text style={styles.title}>{formatGarmentType(title)}</Text>
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#dde5b6",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: "600",
  },
  content: {
    padding: 10,
  },
});

export default ExpandableView;
