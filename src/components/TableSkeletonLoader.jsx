function TableSkeletonLoader() {
  return (
    <tbody className="skeleton">
      {Array.from(Array(10).keys()).map((index) => (
        <tr key={index}>
          <td>
            <span style={{ width: 30 }}>&nbsp;</span>
          </td>
          <td>
            <span style={{ width: 80 }}>&nbsp;</span>
          </td>
          <td>
            <span style={{ width: 80 }}>&nbsp;</span>
          </td>
          <td>
            <span style={{ width: 150 }}>&nbsp;</span>
          </td>
          <td>
            <span style={{ width: 300 }}>&nbsp;</span>
          </td>
          <td>
            <span style={{ width: 30 }}>&nbsp;</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableSkeletonLoader;
