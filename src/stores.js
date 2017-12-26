import { appDispatcher } from './appDispatcher'
import { ActionType } from './actions'

// useStore
export const nameStore = { name: '', onChange: null }
export const messageStore = { message: '', onChange: null }

// Connect Action,Store
appDispatcher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value
        nameStore.onChange()
    }
})
appDispatcher.register(payload => {
    if (payload.actionType === ActionType.SUBMIT_NAME) {
        messageStore.message = nameStore.name + 'さん、こんにちわ'
        messageStore.onChange()
    }
})