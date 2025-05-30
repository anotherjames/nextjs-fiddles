export interface Root {
  chips: Chip[]
  events: Event[]
  game_settings: GameSettings
  game_config: GameConfig
  phases: Phase[]
  teams: Team[]
  total_players: number
  element_stats: Stattribute[]
  element_types: Position[]
  elements: Footballer[]
}

export interface Chip {
  id: number
  name: string
  number: number
  start_event: number
  stop_event: number
  chip_type: string
  overrides: Overrides
}

export interface Overrides {
  rules: Rules
  scoring: Scoring
  element_types: ElementType[]
  //pick_multiplier: any
}

export interface Rules {
  squad_squadsize?: number
}

export interface Scoring {}

export interface ElementType {
  id: number
  plural_name: string
  plural_name_short: string
  singular_name: string
  singular_name_short: string
  squad_select: number
  //squad_min_select: any
  //squad_max_select: any
  squad_min_play: number
  squad_max_play: number
  ui_shirt_specific: boolean
  sub_positions_locked: number[]
  element_count: number
}

export interface Event {
  id: number
  name: string
  deadline_time: string
  //release_time: any
  average_entry_score: number
  finished: boolean
  data_checked: boolean
  highest_scoring_entry: number
  deadline_time_epoch: number
  deadline_time_game_offset: number
  highest_score: number
  is_previous: boolean
  is_current: boolean
  is_next: boolean
  cup_leagues_created: boolean
  h2h_ko_matches_created: boolean
  can_enter: boolean
  can_manage: boolean
  released: boolean
  ranked_count: number
  overrides: Overrides2
  chip_plays: ChipPlay[]
  most_selected: number
  most_transferred_in: number
  top_element: number
  top_element_info: TopElementInfo
  transfers_made: number
  most_captained: number
  most_vice_captained: number
}

export interface Overrides2 {
  rules: Rules2
  scoring: Scoring2
  //element_types: any[]
  //pick_multiplier: any
}

export interface Rules2 {}

export interface Scoring2 {}

export interface ChipPlay {
  chip_name: string
  num_played: number
}

export interface TopElementInfo {
  id: number
  points: number
}

export interface GameSettings {
  league_join_private_max: number
  league_join_public_max: number
  league_max_size_public_classic: number
  league_max_size_public_h2h: number
  league_max_size_private_h2h: number
  league_max_ko_rounds_private_h2h: number
  league_prefix_public: string
  league_points_h2h_win: number
  league_points_h2h_lose: number
  league_points_h2h_draw: number
  league_ko_first_instead_of_random: boolean
  //cup_start_event_id: any
  //cup_stop_event_id: any
  //cup_qualifying_method: any
  //cup_type: any
  //featured_entries: any[]
  element_sell_at_purchase_price: boolean
  percentile_ranks: number[]
  underdog_differential: number
  squad_squadplay: number
  squad_squadsize: number
  //squad_special_min: any
  //squad_special_max: any
  //squad_team_limit: number
  squad_total_spend: number
  ui_currency_multiplier: number
  ui_use_special_shirts: boolean
  //ui_special_shirt_exclusions: any[]
  stats_form_days: number
  sys_vice_captain_enabled: boolean
  transfers_cap: number
  transfers_sell_on_fee: number
  max_extra_free_transfers: number
  //league_h2h_tiebreak_stats: string[]
  timezone: string
}

export interface GameConfig {
  settings: Settings
  rules: Rules3
  scoring: Scoring3
}

export interface Settings {
  entry_per_event: boolean
  timezone: string
}

export interface Rules3 {
  league_join_private_max: number
  league_join_public_max: number
  league_max_size_public_classic: number
  league_max_size_public_h2h: number
  league_max_size_private_h2h: number
  league_max_ko_rounds_private_h2h: number
  league_prefix_public: string
  league_points_h2h_win: number
  league_points_h2h_lose: number
  league_points_h2h_draw: number
  league_ko_first_instead_of_random: boolean
  //cup_start_event_id: any
  //cup_stop_event_id: any
  //cup_qualifying_method: any
  //cup_type: any
  //featured_entries: any[]
  element_sell_at_purchase_price: boolean
  percentile_ranks: number[]
  underdog_differential: number
  squad_squadplay: number
  squad_squadsize: number
  //squad_special_min: any
  //squad_special_max: any
  squad_team_limit: number
  squad_total_spend: number
  ui_currency_multiplier: number
  ui_use_special_shirts: boolean
  //ui_special_shirt_exclusions: any[]
  stats_form_days: number
  sys_vice_captain_enabled: boolean
  transfers_cap: number
  transfers_sell_on_fee: number
  max_extra_free_transfers: number
  league_h2h_tiebreak_stats: string[]
}

export interface Scoring3 {
  long_play: number
  short_play: number
  goals_conceded: GoalsConceded
  saves: number
  goals_scored: GoalsScored
  assists: number
  clean_sheets: CleanSheets
  penalties_saved: number
  penalties_missed: number
  yellow_cards: number
  red_cards: number
  own_goals: number
  bonus: number
  bps: number
  influence: number
  creativity: number
  threat: number
  ict_index: number
  special_multiplier: number
  mng_goals_scored: MngGoalsScored
  mng_clean_sheets: MngCleanSheets
  mng_win: MngWin
  mng_draw: MngDraw
  mng_loss: number
  mng_underdog_win: MngUnderdogWin
  mng_underdog_draw: MngUnderdogDraw
  starts: number
  expected_assists: number
  expected_goal_involvements: number
  expected_goals_conceded: number
  expected_goals: number
}

export interface GoalsConceded {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface GoalsScored {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface CleanSheets {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface MngGoalsScored {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface MngCleanSheets {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface MngWin {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface MngDraw {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface MngUnderdogWin {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface MngUnderdogDraw {
  DEF: number
  FWD: number
  GKP: number
  MID: number
  MNG: number
}

export interface Phase {
  id: number
  name: string
  start_event: number
  stop_event: number
  highest_score: number
}

export interface Team {
  code: number
  draw: number
  //form: any
  id: number
  loss: number
  name: string
  played: number
  points: number
  position: number
  short_name: string
  strength: number
  //team_division: any
  unavailable: boolean
  win: number
  strength_overall_home: number
  strength_overall_away: number
  strength_attack_home: number
  strength_attack_away: number
  strength_defence_home: number
  strength_defence_away: number
  pulse_id: number
}

export interface Stattribute {
  label: string
  name: string
}

export interface Position {
  id: number
  plural_name: string
  plural_name_short: string
  singular_name: string
  singular_name_short: string
  squad_select: number
  //squad_min_select: any
  //squad_max_select: any
  squad_min_play: number
  squad_max_play: number
  ui_shirt_specific: boolean
  sub_positions_locked: number[]
  element_count: number
}

export interface Footballer {
  can_transact: boolean
  can_select: boolean
  chance_of_playing_next_round?: number
  chance_of_playing_this_round?: number
  code: number
  cost_change_event: number
  cost_change_event_fall: number
  cost_change_start: number
  cost_change_start_fall: number
  dreamteam_count: number
  element_type: number
  ep_next?: string
  ep_this: string
  event_points: number
  first_name: string
  form: string
  id: number
  in_dreamteam: boolean
  news: string
  news_added?: string
  now_cost: number
  photo: string
  points_per_game: string
  removed: boolean
  second_name: string
  selected_by_percent: string
  special: boolean
  //squad_number: any
  status: string
  team: number
  team_code: number
  total_points: number
  transfers_in: number
  transfers_in_event: number
  transfers_out: number
  transfers_out_event: number
  value_form: string
  value_season: string
  web_name: string
  region?: number
  team_join_date?: string
  birth_date?: string
  has_temporary_code: boolean
  opta_code: string
  minutes: number
  goals_scored: number
  assists: number
  clean_sheets: number
  goals_conceded: number
  own_goals: number
  penalties_saved: number
  penalties_missed: number
  yellow_cards: number
  red_cards: number
  saves: number
  bonus: number
  bps: number
  influence: string
  creativity: string
  threat: string
  ict_index: string
  starts: number
  expected_goals: string
  expected_assists: string
  expected_goal_involvements: string
  expected_goals_conceded: string
  mng_win: number
  mng_draw: number
  mng_loss: number
  mng_underdog_win: number
  mng_underdog_draw: number
  mng_clean_sheets: number
  mng_goals_scored: number
  influence_rank: number
  influence_rank_type: number
  creativity_rank: number
  creativity_rank_type: number
  threat_rank: number
  threat_rank_type: number
  ict_index_rank: number
  ict_index_rank_type: number
  corners_and_indirect_freekicks_order?: number
  corners_and_indirect_freekicks_text: string
  direct_freekicks_order?: number
  direct_freekicks_text: string
  penalties_order?: number
  penalties_text: string
  expected_goals_per_90: number
  saves_per_90: number
  expected_assists_per_90: number
  expected_goal_involvements_per_90: number
  expected_goals_conceded_per_90: number
  goals_conceded_per_90: number
  now_cost_rank: number
  now_cost_rank_type: number
  form_rank: number
  form_rank_type: number
  points_per_game_rank: number
  points_per_game_rank_type: number
  selected_rank: number
  selected_rank_type: number
  starts_per_90: number
  clean_sheets_per_90: number
}
