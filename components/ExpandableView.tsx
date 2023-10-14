import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

const ExpandableView = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { title } = props;

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
        onPress={() => {
          toggleExpand();
        }}
      >
        <Text style={{ fontWeight: "600" }}>{title}s</Text>
      </TouchableOpacity>
      {expanded && props.children}
    </View>
  );
};

export default ExpandableView;
