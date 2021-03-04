package edp.davinci.dao;


import edp.davinci.model.DavinciStaticTerminal;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DavinciStaticTerminalMapper {

    @Select("select * from davinci_statistic_terminal where user_id=#{userId}")
    List<DavinciStaticTerminal> selterminal(@Param("userId") Long userId);
}
