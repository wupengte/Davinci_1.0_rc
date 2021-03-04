package edp.davinci.dto.staticDto;

import lombok.Data;

@Data
public class DurationInfo {

    //自定义的联表查询对象
    private Long userId;
    private String userName;
    private String duration;
}
