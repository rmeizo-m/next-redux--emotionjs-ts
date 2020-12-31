const initialState = [
  {name:"Занятия", url:"#", img:"/image/icon/ic24.svg"},
  {name:"Учащиеся", url:"/", img:"/image/icon/user.svg"},
  {name:"Тренеры", url:"#", img:"/image/icon/book.svg"},
  {name:"Финансы", url:"#", img:"/image/icon/ruble.svg"},
  {name:"Абонементы", url:"#", img:"/image/icon/ticket.svg"},
  {name:"Доступ в CRM", url:"#", img:"/image/icon/flag.svg"},
  {name:"Рассылки", url:"#", img:"/image/icon/email.svg"},
  {name:"Отчеты", url:"#", img:"/image/icon/chart-bar.svg"},
  {name:"Настройки", url:"#", img:"/image/icon/settings.svg"}
]

export const sidebarRedycer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_LINK": {
      state.push(action.payload)
    }
    default:
      return state
  }
}
