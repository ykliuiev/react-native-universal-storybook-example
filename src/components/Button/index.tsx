import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  type?: 'contained' | 'outlined' | 'text' | 'underlined';
  disabled?: boolean;
  outlinedTextColor?: string;
}

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export default function Button({
  onPress,
  children,
  type = 'contained',
  disabled,
  outlinedTextColor,
}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed, hovered }: PressableState) => [
        baseStyles.button,
        buttonStyles[type],
        {
          opacity: pressed || hovered || disabled ? 0.8 : 1,
        },
      ]}
    >
      <Text
        style={[
          baseStyles.text,
          textStyles[type],
          // @ts-ignore
          type === 'outlined' &&
            outlinedTextColor && {
              color: outlinedTextColor,
            },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const baseStyles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
  },
});

const buttonStyles = StyleSheet.create({
  contained: {
    backgroundColor: '#4D2AE1',
  },
  outlined: {
    backgroundColor: '#fff',
  },
  text: {},
  underlined: {},
});

const textStyles = StyleSheet.create({
  contained: {
    color: '#fff',
  },
  outlined: {
    color: '#249AA7',
  },
  text: {
    color: '#4D2AE1',
  },
  underlined: {
    color: '#4D2AE1',
    lineHeight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#4D2AE1',
  },
});
