import { View, Text } from "react-native";
import React, { useState } from "react";
import Input from "../../../components/common/Input";
import BottomSheet from "../../../components/common/BottomSheet";

const acceptance_rate = () => {
  const [open, setOpen] = useState(false);
  return (
    <View className=" pt-5">
      {/* <Input onChangeText={(e: string) => console.log(e)} /> */}

      <BottomSheet onClose={() => setOpen(false)} open={open}>
        <View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default acceptance_rate;
