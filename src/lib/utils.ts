// lib/utils.ts

/**
 * Format a timestamp to HH:MM format.
 * @param date A JavaScript Date object
 * @returns formatted time string
 */
export const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  
  /**
   * Generate a random avatar color based on user string
   * @param str - username or userId
   * @returns string color hex
   */
  export const stringToColor = (str: string): string => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      color += ('00' + value.toString(16)).slice(-2)
    }
    return color
  }
  