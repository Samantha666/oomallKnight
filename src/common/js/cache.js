import storage from 'good-storage'

const PUSH_VOICE_KEY = '__oomal-knight-push-voice__'

export function savePushVoice (isOpen) {
  storage.set(PUSH_VOICE_KEY, isOpen)
}

export function loadPushVoice () {
  let pushVoice = storage.get(PUSH_VOICE_KEY, [])
  return pushVoice
}
