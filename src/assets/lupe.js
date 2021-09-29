import React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { StyleSheet } from 'react-native'

export function Lupe (props) {
  return (
    <Svg
      width={25}
      style={styles.svg}
      height={25}
      viewBox='0 0 512 512'
      {...props}
    >
      <Path
        d='M187.482 313.479c-69.617 0-126.034-56.428-126.026-126.029 0-69.606 56.425-126.026 126.031-126.026 69.596 0 126.026 56.425 126.026 126.026.003 69.599-56.445 126.026-126.031 126.029z'
        fill='transparent'
      />
      <G fill='#eee'>
        <Path d='M454.956 511.943c-14.618.003-29.217-5.558-40.34-16.681l-111.703-111.7 18.301-18.309-25.06-25.057c-74.04 52.833-176.269 44.8-241.239-20.18C19.5 284.607 0 237.526 0 187.445 0 137.371 19.5 90.29 54.915 54.878 128-18.22 246.945-18.213 320.051 54.88c64.973 64.978 73.006 167.209 20.173 241.242l25.065 25.062 18.296-18.304 111.708 111.706C506.071 425.358 512 439.687 512 454.929c0 15.235-5.934 29.56-16.707 40.335-11.123 11.116-25.735 16.679-40.337 16.679zM330.757 383.561l97.779 97.774c14.561 14.561 38.262 14.561 52.833 0 7.053-7.058 10.936-16.435 10.936-26.414 0-9.976-3.886-19.359-10.936-26.414l-97.777-97.772-18.299 18.301-51.205-51.2 5.399-6.868c52.39-66.645 46.643-162.15-13.366-222.167-65.423-65.416-171.868-65.418-237.284 0-31.693 31.693-49.147 73.828-49.147 118.643 0 44.818 17.454 86.953 49.147 118.646 60.006 60.009 155.507 65.754 222.154 13.366l6.871-5.394 37.276 37.266 8.108-8.108 13.924 13.921-26.413 26.42z' />
        <Path d='M454.956 476.528c-3.343 0-9.769-.824-15.276-6.326l-25.004-25.009 13.926-13.921 25.001 25.006c.133.136.558.558 1.349.558.783 0 1.208-.422 1.349-.563l13.921 13.921c-5.503 5.507-11.928 6.334-15.266 6.334z' />
      </G>
      <Path
        d='M106.742 187.452H87.05c.003-26.788 10.458-51.996 29.445-70.989 18.988-18.985 44.196-29.443 70.981-29.443l.003 19.692c-21.527 0-41.789 8.407-57.06 23.677-15.265 15.271-23.677 35.536-23.677 57.063z'
        fill='#fff'
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    right: 16,
    position: 'absolute'
  }
})