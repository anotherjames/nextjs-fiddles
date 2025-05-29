'use server';

import { Root } from './fpl-definitions';
import { TableData, Row, Header } from './my-definitions';

export default async function getPlayerData(): Promise<TableData> {
  var url = 'https://fantasy.premierleague.com/api/bootstrap-static/';

  var response = await fetch(url);

  // Make request to API and get response before this point.
  var data: Root = await response.json();

  var rows: Row[] = [],
    row: Row = [],
    cost = 0.00,
    ppg = 0.00,
    ppg_cost = 0.0000,
    main_cols = {
      className: 'font-bold',
    };

  // Build map of positions.
  var positions = new Map();
  for (var position of data.element_types) {
    positions.set(position.id, position.singular_name_short);
  }

  // Build map of teams.
  var teams = new Map();
  for (var team of data.teams) {
    teams.set(team.code, team.name);
  }

  // @TODO Fetch my current team, and highlight the rows for players in it!
  for (var element of data.elements) {
    ppg = parseFloat(element.points_per_game);
    cost = (element.now_cost / 10);
    ppg_cost = (ppg / cost);

    row = [
      element.web_name,
      positions.get(element.element_type),
      teams.get(element.team_code),
      Object.assign(cost.toFixed(1), main_cols),
      Object.assign(ppg.toFixed(2), {
        className: 'hidden',
      }),
      // Duplicate PPG ready for a 'Captained PPG' column which multiples PPG according
      // to a kind of likeliness that the player would be captained.
      Object.assign(ppg.toFixed(2), main_cols),
      Object.assign(ppg_cost.toFixed(4), main_cols),
      element.news,

      element.form,
      element.total_points,
      element.chance_of_playing_next_round,
      //element.chance_of_playing_this_round,
      element.minutes,
      element.starts,

      element.expected_goals_per_90,
      element.saves_per_90,
      element.expected_assists_per_90,
      element.expected_goal_involvements_per_90,
      element.expected_goals_conceded_per_90,
      element.goals_conceded_per_90,
      element.clean_sheets_per_90,
      //element.starts_per_90,

      element.selected_by_percent,
      element.value_form,
      element.value_season,
      //element.code,
      //element.cost_change_event,
      //element.cost_change_event_fall,
      //element.cost_change_start,
      //element.cost_change_start_fall,
      //element.dreamteam_count,
      //element.ep_next,
      //element.ep_this,
      //element.event_points,
      element.first_name,
      //element.id,
      //element.in_dreamteam,
      //element.news_added,
      //element.photo,
      element.second_name,
      //element.special,
      //element.squad_number,
      //element.status,
      //element.team,
      //element.transfers_in,
      //element.transfers_in_event,
      //element.transfers_out,
      //element.transfers_out_event,
      //element.region,

      element.goals_scored,
      element.assists,
      element.clean_sheets,
      element.goals_conceded,
      element.own_goals,
      element.penalties_saved,
      element.penalties_missed,
      element.yellow_cards,
      element.red_cards,
      element.saves,
      element.bonus,
      element.bps,
      //element.influence,
      //element.creativity,
      //element.threat,
      //element.ict_index,
      //element.expected_goals,
      //element.expected_assists,
      //element.expected_goal_involvements,
      //element.expected_goals_conceded,
      //element.influence_rank,
      //element.influence_rank_type,
      //element.creativity_rank,
      //element.creativity_rank_type,
      //element.threat_rank,
      //element.threat_rank_type,
      //element.ict_index_rank,
      //element.ict_index_rank_type,
      element.corners_and_indirect_freekicks_order,
      //element.corners_and_indirect_freekicks_text,
      element.direct_freekicks_order,
      //element.direct_freekicks_text,
      element.penalties_order,
      //element.penalties_text,
      //element.now_cost_rank,
      //element.now_cost_rank_type,
      //element.form_rank,
      //element.form_rank_type,
      //element.points_per_game_rank,
      //element.points_per_game_rank_type,
      //element.selected_rank,
      //element.selected_rank_type,
    ];

    rows.push(row);
  }

  // Initially sort by descending PPG (the 5th column).
  rows.sort(function (a, b) {
    var a_ppg = a[4];
    var b_ppg = b[4];

    if (a_ppg === b_ppg) {
        return 0;
    }
    else {
        return (a_ppg > b_ppg) ? -1 : 1;
    }
  });

  // Pick out the top four players by PPG and @TODO calculate a factor to multiply
  // each of them them according to likeliness of being captained. Update their
  // PPG/cost column accordingly to be CPPG/cost.
  var i;
  /*var candidate_captain_ppgs_total = 0.00;
  for (i = 0; i < 4; i++) {
    candidate_captain_ppgs_total += parseFloat(rows[i][4]);
  }*/
  // For now, we use a factor that says the top player will be captained three
  // times as much as the other candidates.
  ppg_cost = parseFloat(rows[0][5]) * 1.75;
  rows[0][5] = Object.assign(ppg_cost.toFixed(2), {
    className: rows[0][5].className,
  });
  rows[0][6] = Object.assign((ppg_cost / parseFloat(rows[0][3])).toFixed(4), {
    className: rows[0][6].className,
  });
  for (i = 1; i < 4; i++) {
    ppg_cost = parseFloat(rows[i][5]) * 1.25;
    rows[i][5] = Object.assign(ppg_cost.toFixed(2), {
      className: rows[i][5].className,
    });
    rows[i][6] = Object.assign((ppg_cost / parseFloat(rows[i][3])).toFixed(4), {
      className: rows[i][6].className,
    });
  }

  var header: Header = [
    'web_name',
    'position',
    'team',
    'cost',
    Object.assign('PPG', {
      className: 'hidden',
    }),
    Object.assign('CPPG', {
      title: "'Captained' points per game - i.e. points per game, but with the top players multiplied by a factor according to their likelihood of being captained. Currently that's as boring as the top player being arbitrarily set as 3 times more likely to be captained than the next 3, still adding up to doubling their gameweek points. Which isn't quite right, and isn't dynamic either, but helps show how Haaland & Palmer should be boosted up a bit because they have some likelihood of being captained.",
      className: 'font-bold',
    }),
    Object.assign('Value (CPPG)', {
      title: "Captained points per game, divided by cost",
      className: 'font-bold',
    }),
    'news',
    'form',
    'total_points',
    'chance_of_playing_next_round',
    //'chance_of_playing_this_round',
    'minutes',
    'starts',
    'expected_goals_per_90',
    'saves_per_90',
    'expected_assists_per_90',
    'expected_goal_involvements_per_90',
    'expected_goals_conceded_per_90',
    'goals_conceded_per_90',
    'clean_sheets_per_90',
    'selected_by_percent',
    'value_form',
    'value_season',
    'first_name',
    'second_name',
    'goals_scored',
    'assists',
    'clean_sheets',
    'goals_conceded',
    'own_goals',
    'penalties_saved',
    'penalties_missed',
    'yellow_cards',
    'red_cards',
    'saves',
    'bonus',
    'bps',
    'corners_and_indirect_freekicks_order',
    'direct_freekicks_order',
    'penalties_order',
  ];

  return {
    header: header,
    rows: rows
  };
}
