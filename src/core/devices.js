const DEVICE_NAMES = {
  U50A_ATT: '5041C',
  U50A_PLUS_ATT: '5059R',
  U50A_PLUS_TF: 'A502DL',
  simba6_cricket: '6060C',
  idol4: '6055',
  FERMI_TF: 'A501DL'
}
// eslint-disable-next-line
export function getDeviceName(device) {
  return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device
}
