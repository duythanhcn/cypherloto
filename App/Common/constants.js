export const API_URL = {
  LOGIN: '/account/login',
  REGISTER: '/account/register',
  GET_BALANCE: '/account/balance',
  VERIFY_2FA: '/account/verify_2fa',
  GET_CURRENT_LOT: '/lottery_times',
  GET_WINNER_LOT: '/lottery/newest',
  GET_CUR_LOT_REPORT: '/actions/reports',
  GET_USER_TICKET: '/tickets',
  GET_DEPOSIT: '/account/deposit_history',
  GET_WITHDRAW: '/account/withdraw_history',
  GET_DRAWING: '/lottery',
  WITHDRAW: '/account/withdraw',
  BUY: '/buy_tickets',
  VERIFY_QR: '/account/verify_2fa',
  CREATE_QR: '/account/get_2fa_key'
};

export const STATUS_ICON = {
  COMPLETED: {
    icon: 'check',
    color: 'green'
  },
  COMPLETE: {
    icon: 'check',
    color: 'green'
  },
  PENDING: {
    icon: 'stop-circle',
    color: '#FFCF20'
  },
  CONFIRMED: {
    icon: 'check-circle',
    color: '#197BFF'
  },
  SIGNED: {
    icon: 'edit',
    color: '#fe7800'
  },
  FAILED: {
    icon: 'times',
    color: 'red'
  }
}