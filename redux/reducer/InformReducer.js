const initialState = [
  {name: "Должники", sum: "12", subSum:"1 850,5", url: "/image/iconCard/ic24-ruble.svg", active: "ACTIVE" },
  {name: "Без абонемента", sum: "30", url: "/image/iconCard/ic24-ticket.svg", active: "ACTIVE" },
  {name: "Количество тренеров", sum: "250", url: "/image/iconCard/ic24-book.svg", active: "ACTIVE" },
  {name: "К оплате сегодня", sum: "121", url: "/image/iconCard/ic24-wallet.svg", active: "ACTIVE" },
  {name: "К оплате завтра", sum: "32", url: "/image/iconCard/ic24-walle.svg", active: "ACTIVE" },
  {name: "Получить выписку по зарплате тренеров", sum: null, url: "/image/iconCard/ic24-file-edit.svg"},
]

export const informReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}