export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY'

export const chooseCategory = (cat) => {
  return {
    type: CHOOSE_CATEGORY,
    category: cat
  }
}

export default {
  chooseCategory
}
