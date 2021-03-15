package edp.davinci.dao;


import edp.davinci.model.DavinciStaticDuration;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DavinciStaticDurationMapper {

    @Select({"select * from davinci_statistic_duration where user_id=#{userId}"})
    List<DavinciStaticDuration> selCurDurationByName(@Param("userId") Long userId);

    @Select({"select ifnull((select sum(TIMESTAMPDIFF(SECOND,start_time,end_time))/60.00 from user u \n" +
            "left join davinci_statistic_duration d on u.username\n" +
            "= #{username} where u.id = d.user_id), 0)"})
    float selSumTimeByName(@Param("username") String username);
}
