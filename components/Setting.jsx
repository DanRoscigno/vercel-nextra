function SettingTable(props) {
  return (
    <div>
      <b>{props.settingName}</b>
      <table style={{marginLeft: '1em', align: 'left'}}>
      <tbody>
        <tr>
          <td></td>
          <td>Default</td>
          <td style={{whiteSpace: 'pre-line'}}>{props.settingDefault}</td>
        </tr>
        <tr>
          <td></td>
          <td style={{paddingRight: '1em'}}>Description</td>
          <td>{props.settingDescription}</td>
        </tr>
      </tbody>
      </table>
      <br />
    </div>
  );
}
 
export default SettingTable;
